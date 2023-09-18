'use client'
import { useState } from "react";
import TopBar from "../../(components)/Topbar";
import FormProperties from "../../(hoc)/form";
import { useRouter } from "next/navigation";
import style from '@/style/properties.module.css'

export default function CompleteProfile() {
    let [modalView, setModalView] = useState(false)
    let [userFormData, setUserFormData] = useState({})
    let db = indexedDB.open('keepinglyDB', 1.0)
    let router = useRouter()
    let div1 = [
        {
            h1: 'Complete your profile',
            p: 'Fill in the required information.',
            arr: [
                {
                    name: 'firstName',
                    label: 'First name',
                    type:"text",
                    placeholder: "Enter first name"
                },
                {
                    name: 'lastName',
                    label: 'Last name',
                    type:"text",
                    placeholder:"Enter last name"
                },
                {
                    name: 'emailAddress',
                    label:'Email address',
                    type:"email",
                    placeholder:"Enter email address"
                },
                {
                    name: 'phoneNumber',
                    label: 'Phone number',
                    type: 'number',
                    placeholder: 'Enter phone number'
                },[
                    {
                        name: 'license',
                        label: 'License',
                        type: 'select',
                        placeholder: 'Select license',
                        opt: [
                            'test1', 'test2', 'test3'
                        ]
                    },{
                        name: 'issuingState',
                        label: 'Issuing state',
                        type: 'select',
                        placeholder: 'Select state',
                        opt: [
                            'test1', 'test2', 'test3'
                        ]
                    }
                ],{
                    name: 'agency',
                    label: 'Agency',
                    type: 'text',
                    placeholder: 'Enter agency'
                },{
                    name: 'agencyAddress1',
                    label: 'Agency address (line 1)',
                    type: 'text',
                    placeholder: 'Enter address'
                },{
                    name: 'agencyAddress2',
                    label: 'Agency address (line 2)',
                    type: 'text',
                    placeholder: 'Enter address'
                },[
                    {
                        name: 'city',
                        label: 'City',
                        type: 'text',
                        placeholder: 'Enter city',
                    },{
                        name: 'state',
                        label: 'State',
                        type: 'select',
                        placeholder: 'Select state',
                        opt: [
                            'test1', 'test2', 'test3'
                        ]
                    },{
                        name: 'Zipcode',
                        label: 'ZIP code',
                        type: 'text',
                        placeholder: 'Enter city',
                    }
                ]
            ]
        }
    ]
    let addUser =()=>{
        let result = db.result
        let transact = result.transaction('user', 'readwrite')
        let objStore = transact.objectStore('user')
        let put = objStore.add(userFormData)
        put.onerror=()=>{
            alert('OPPS an Error occured')
        }
        put.onsuccess=()=>{
            setModalView(true)
        }
    }
    let handleInput =(name, value)=>{
        setUserFormData(
            {
                properties: [],
                id: 0,
                ...userFormData,
                [name]: value
            }
        )
    }
    return (
        <>
        <TopBar title={`Welcome to Keepingly`}/>
        <FormProperties arrOpt={div1} func={addUser} handleInput={handleInput}/>
        {
                modalView &&
                <div className={style.modal}>
                <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="#F0D9E1"/>
                        <path d="M34 18L23 29M20 32L13.9999 26M7.02423 30C6.36093 28.1233 6 26.1038 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 33.9411 33.9411 42 24 42C19.7134 42 15.7768 40.5016 12.6853 38" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <p>Congratulations! Your profile has been successfully set up. You're all set to start adding properties on the Keepingly platform. Happy listing!</p>
                    <button className={style.button} onClick={()=>{
                        setModalView(false)
                        router.push('./')
                    }}>Proceed to Properties</button>
                </div>
            </div>
            }
        </>
    )
}