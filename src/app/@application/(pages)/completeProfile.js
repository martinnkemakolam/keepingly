"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import style from "@/style/properties.module.css";
import { UserContext } from "@/app/userContext";
import TopBar from "../(container)/Topbar";
import FormProperties from "../(container)/form";
import { api } from "@/app/keepinglyClientApi";

export default function CompleteProfile() {
  let [modalView, setModalView] = useState(false);
  let [userFormData, setUserFormData] = useState({});
  let router = useRouter();
  let div1 = [
    {
      h1: "Complete your profile",
      p: "Fill in the required information.",
      btnText: `Save profile`,
      arr: [
        {
          name: "first_name",
          label: "First name",
          type: "text",
          placeholder: "Enter first name",
        },
        {
          name: "last_name",
          label: "Last name",
          type: "text",
          placeholder: "Enter last name",
        },
        {
          name: "website",
          label: "Website",
          type: "text",
          placeholder: "Enter your website",
        },
        [
          {
            length: "medium",
            name: "licenseNumber",
            label: "License number",
            type: "number",
            placeholder: "Enter license number",
          },
          {
            length: "medium",
            name: "license_state",
            label: "License state",
            type: "select",
            placeholder: "Select state",
            opt: ["test1", "test2", "test3"],
          },
        ],
        {
          name: "agency_name",
          label: "Agency name",
          type: "text",
          placeholder: "Enter agency name",
        },
        {
          name: "agency_address",
          label: "Agency address",
          type: "text",
          placeholder: "Enter agency address",
        },
        [
          {
            length: "small",
            name: "city",
            label: "City",
            type: "text",
            placeholder: "Enter city",
          },
          {
            length: "small",
            name: "state",
            label: "State",
            type: "select",
            placeholder: "Select state",
            opt: ["test1", "test2", "test3"],
          },
          {
            length: "small",
            name: "zipcode",
            label: "ZIP code",
            type: "text",
            placeholder: "Enter Zip code",
          },
        ],
      ],
    },
  ];
  let addUser = async () => {
    let data = {
      first_name: userFormData.first_name,
      last_name: userFormData.last_name,
      website: userFormData.website,
      license_state: userFormData.license_state,
      license_number: userFormData.license_number,
      agency_name: userFormData.agency_name,
      agency_address: userFormData.agency_address,
      city: userFormData.city,
      state: userFormData.state,
      zipcode: userFormData.zipcode,
    };
    let tkn = sessionStorage.getItem("kpuo");
    let id = sessionStorage.getItem("kppk");
    let apiValue = await api.patch(`/api/v2/update/?pk=${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tkn}`,
      },
    });
    UserContext.setCanClick(true);
    setModalView(true);
  };

  let handleInput = (name, value) => {
    setUserFormData({
      properties: [],
      id: 0,
      ...userFormData,
      [name]: value,
    });
  };
  useEffect(() => {
    (async () => {
      let tkn = sessionStorage.getItem("kpuo");
      let apiValue = await api.get("/api/v2/profile/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tkn}`,
        },
      });
      setUserFormData(apiValue.data[0]);
    })();
  }, []);
  return (
    <>
      <TopBar title={`Welcome to Keepingly`} showSearch={false} />
      <FormProperties
        arrOpt={div1}
        showBtn={true}
        func={addUser}
        handleInput={handleInput}
        isProperty={false}
        isEdit={false}
        values={userFormData}
        file={userFormData.file}
      />
      {modalView && (
        <div className={style.modal}>
          <div>
            <svg
              width='48'
              height='48'
              viewBox='0 0 48 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='48' height='48' rx='24' fill='#F0D9E1' />
              <path
                d='M34 18L23 29M20 32L13.9999 26M7.02423 30C6.36093 28.1233 6 26.1038 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 33.9411 33.9411 42 24 42C19.7134 42 15.7768 40.5016 12.6853 38'
                stroke='#A61D4A'
                stroke-width='1.5'
                stroke-linecap='round'
              />
            </svg>
            <h1 className={style.dropDownH1}>Congratulations!</h1>
            <p>
              Your profile has been successfully set up. You're all set to start
              adding properties on the Keepingly platform.
              <br />
              <br />
              To make any updates or edits to your profile, simply navigate to
              your profile settings. Happy listing!
            </p>
            <button
              className={style.button}
              onClick={() => {
                setModalView(false);
                router.push("/");
              }}
            >
              Proceed to Properties
            </button>
          </div>
        </div>
      )}
    </>
  );
}
