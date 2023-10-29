'use client'

import { useRouter } from "next/navigation";
import TopBar from "../(container)/Topbar";
import PropertyInfo from "../(container)/propertyInfo";
import ExpenseTitle from "../(container)/expenseTitle";
import ExpensesTable from "../(container)/expenseTable";
import { ExpenseFooter } from "../(container)/expenseFooter";
import { useContext, useEffect, useState } from "react";
import { userContext } from "@/app/userContext";

export let Expenses=(params)=>{
    let ctx = useContext(userContext)
    let router = useRouter()
    let filterSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.15" d="M2.66675 2.66669L6.00008 8.00002V12L10.0001 14V8.00002L13.3334 2.66669H2.66675Z" fill="#A61D4A"/>
    <path d="M2.66675 2.66669L6.00008 8.00002V12L10.0001 14V8.00002L13.3334 2.66669H2.66675Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    let exportSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.66675 6.66669L8.00008 10L11.3334 6.66669" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    useEffect(()=>{
        fetch(`https://pre.api.keepingly.co/api/v2/get-expense/`,{
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${ctx.user.access_token}`
            }
        }).then(res=>{
            console.log(res)
            return res.json()
        })
        .then(res => console.log(res))
    }, [ctx])
    let [id, setId] = useState(0)
    let [properties, setProperties] = useState([])
    useEffect(()=>{
        async function getProperties(){
            let userToken = ctx.user.access_token
            try {
                let prop = await fetch(`https://pre.api.keepingly.co/api/v2/get_property_user/`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    },
                    mode: 'cors'
                })
                if(prop.status === 401){
                    return
                }
                let propetiiesJson = await prop.json()
                console.log(propetiiesJson)
                setProperties(propetiiesJson)
                return propetiiesJson
            } catch (error) {
                console.error(error)
            }
        }
        getProperties()
    }, [ctx])
    return (
        <>
        <TopBar title={`Expenses`} btnFunc1={()=> router.push(`/Expenses/addExpense?${properties[id].id}`)} buttonText1={"Add an expense"} btnStyle1={'redFillBtn'} showSearch={true} />
        <PropertyInfo h1Text={`${properties[id]?.address_one}, ${properties[id]?.city} ${properties[id]?.zipcode}`} showSvg={true} arrProperties={properties} setId={setId}/>
        <ExpenseTitle title={`Expenses`} btnStyle1={`clearBtn`} btnStyle2={`clearBtn`} svg1={filterSvg} buttonText1={`Filters`} svg2={exportSvg} buttonText2={`Export as`}/>
        <ExpensesTable />
        <ExpenseFooter currentPage={1} lastPage={2}/>
        </>
    )
}
