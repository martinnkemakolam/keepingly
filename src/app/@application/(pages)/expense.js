"use client";

import { useRouter } from "next/navigation";
import TopBar from "../(container)/Topbar";
import PropertyInfo from "../(container)/propertyInfo";
import ExpenseTitle from "../(container)/expenseTitle";
import ExpensesTable from "../(container)/expenseTable";
import { ExpenseFooter } from "../(container)/expenseFooter";
import { useContext, useEffect, useState } from "react";
import { userContext } from "@/app/userContext";
import { api } from "@/app/keepinglyClientApi";

export let Expenses = (params) => {
  let router = useRouter();
  let filterSvg = (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        opacity='0.15'
        d='M2.66675 2.66669L6.00008 8.00002V12L10.0001 14V8.00002L13.3334 2.66669H2.66675Z'
        fill='#A61D4A'
      />
      <path
        d='M2.66675 2.66669L6.00008 8.00002V12L10.0001 14V8.00002L13.3334 2.66669H2.66675Z'
        stroke='#A61D4A'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
  let exportSvg = (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.66675 6.66669L8.00008 10L11.3334 6.66669'
        stroke='#A61D4A'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
  let [exp, setExp] = useState([]);
  // fetch data over server
  let [id, setId] = useState(0);
  let [properties, setProperties] = useState([]);
  let sec = (arr, start, stop) => {
    return arr.map((ele, id) => {
      if (id + 1 >= start && id + 1 <= stop) {
        return ele;
      }
    });
  };
  let lastPage = (arr, step) => {
    let value = arr.length / step;
    if (value % 1 !== 0) {
      value = Math.trunc(value + 1);
    }
    return value;
  };
  let [currentPage, setCurrentPage] = useState(1);
  let [step, setStep] = useState(10);
  let nextPageFun = () => {
    let last = lastPage(exp, step);
    if (last === currentPage) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  let prevPageFun = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };
  useEffect(() => {
    let tkn = sessionStorage.getItem("kpuo");
    console.log("this is tkn", tkn);
    api
      .get("/api/v2/get_expense/", {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tkn}`,
        },
      })
      .then((res) => setExp(res.data.data || []));
  }, []);
  useEffect(() => {
    async function getProperties() {
      let userToken = sessionStorage.getItem("kpuo");
      console.log("this is tkn", userToken);
      try {
        let prop = await api.get(`/api/v2/get_property_user/`, {
          headers: {
            "Content-type": "aaplication/json",
            Authorization: `Bearer ${userToken}`,
          },
        });
        if (prop.status === 401) {
          return;
        }
        let propetiiesJson = await prop.data;
        console.log(propetiiesJson);
        setProperties(propetiiesJson || []);
        return propetiiesJson;
      } catch (error) {
        console.error(error);
      }
    }
    getProperties();
  }, []);
  return (
    <>
      <TopBar
        title={`Expenses`}
        btnFunc1={() =>
          router.push(`/Expenses/addExpense?${properties[id].id}`)
        }
        buttonText1={"Add an expense"}
        btnStyle1={"redFillBtn"}
        showSearch={true}
      />
      <PropertyInfo
        h1Text={`${properties[id]?.address_one}, ${properties[id]?.city} ${properties[id]?.zipcode}`}
        showSvg={true}
        arrProperties={properties}
        setId={setId}
      />
      <ExpenseTitle
        title={`Expenses`}
        showCount={
          exp.filter((ele) => ele.property_id.id === properties[id]?.id && ele)
            .length
        }
        btnStyle1={`clearBtn`}
        btnStyle2={`clearBtn`}
        svg1={filterSvg}
        buttonText1={`Filters`}
        svg2={exportSvg}
        buttonText2={`Export as`}
      />
      <ExpensesTable
        data={sec(
          exp.filter((ele) => ele.property_id.id === properties[id]?.id && ele),
          step * currentPage - step,
          step * currentPage
        )}
      />
      <ExpenseFooter
        step={step}
        preFunc={prevPageFun}
        nextFunc={nextPageFun}
        currentPage={currentPage}
        lastPage={lastPage(exp, step)}
      />
    </>
  );
};
