'use client'
import { useContext, useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";
import { userContext } from "@/app/userContext";
import TopBar from "../(container)/Topbar";
import PropertyInfo from "../(container)/propertyInfo";
import FormProperties from "../(container)/form";

export let AddProperty=()=> {
    let formRef = useRef()
    let router = useRouter()
    let userObj = useContext(userContext)
    let [isEdit, setIsEdit] = useState(false)
    let arr = [
        {
            h1: 'Property details',
            p: 'All fields are required',
            arr: [
                {
                    label: 'Address (Line 1)',
                    placeholder: 'Enter address',
                    type: 'text',
                    name: 'address1'
                },
                {
                    label: 'Address (Line 2)',
                    placeholder: 'Enter address',
                    type: 'text',
                    name: 'address2'
                },
                [
                    {
                        length: 'small',
                        label: 'City',
                        placeholder: 'Enter city',
                        type: 'text',
                        name: 'cty'
                    },{
                        length: 'small',
                        label: 'State',
                        placeholder: 'Select state',
                        type: 'select',
                        name: 'state',
                        opt: [
                            'opt1', 'opt2', 'opt3'
                        ]
                    },{
                        length: 'small',
                        label: 'Zip code',
                        placeholder: 'Enter Zip code',
                        type: 'text',
                        name: 'zipcode'
                    },{
                        length: 'small',
                        label: 'Ownership type',
                        placeholder: 'Select ownership type',
                        type: 'select',
                        name: 'ownershiptype',
                        opt: [
                            'opt1',
                            'opt2',
                            'opt3'
                        ]
                    },{
                        length: 'small',
                        label: 'Number of owners',
                        placeholder: 'Select',
                        type: 'select',
                        name: 'howmanyowner',
                        opt: [
                            '1',
                            '2',
                            '3'
                        ]
                    }
                ]
            ]
        },
        {
            h1: 'Owner',
            p: 'All fields are required',
            arr: [
                [
                    {
                        length: 'medium',
                        label: 'First name',
                        placeholder: 'Enter first name',
                        type: 'text',
                        name: 'ownerfirstname'
                    },{
                        length: 'medium',
                        label: 'Last name',
                        placeholder: 'Enter last name',
                        type: 'text',
                        name: 'ownerlastname'
                    },{
                        length: 'medium',
                        label: 'Email address',
                        placeholder: 'Enter email address',
                        type: 'email',
                        name: 'ownermail'
                    },{
                        length: 'medium',
                        label: 'Phone number',
                        placeholder: 'Enter phone number',
                        type: 'number',
                        name: 'ownernumber'
                    },
                ]
            ]
        },{
            h1: 'Additional owners',
            p: 'All fields are required',
            arr: [
                [ 
                {
                    length: 'medium',
                    label: 'First name',
                    placeholder: 'Enter first name',
                    type: 'text',
                    name: 'addownerfirstname'
                },{
                    length: 'medium',
                    label: 'Last name',
                    placeholder: 'Enter last name',
                    type: 'text',
                    name: 'addownerlastname'
                },{
                    length: 'medium',
                    label: 'Email address',
                    placeholder: 'Enter email address',
                    type: 'email',
                    name: 'addownermail'
                },{
                    length: 'medium',
                    label: 'Phone number',
                    placeholder: 'Enter phone number',
                    type: 'number',
                    name: 'addownernumber'
                }
                ]
            ]
        },{
            h1: 'Commission',
            p: 'All fields are required',
            arr: [
                [
                    
                {
                    length: 'medium',
                    label: 'Closing price(in US dollars)',
                    placeholder: 'Enter closing price',
                    type: 'number',
                    name: 'closingprice'
                },{
                    length: 'medium',
                    label: 'Commission percentage',
                    placeholder: 'Enter percentage',
                    type: 'number',
                    name: 'percentage'
                },{
                    length: 'medium',
                    label: 'Closing date',
                    placeholder: 'Select closing date',
                    type: 'date',
                    name: 'date'
                }
                ]
            ]
        }
    ]
    let [userFormData, setUserFormData] = useState()
    let handleInput =(name, value)=>{
        setUserFormData(
            {
                ...userFormData,
                [name]: value
            }
        )
    }
    let formSubmit=()=>{
        formRef.current.click()
    }

    let submit=()=>{
        // let result = db.current.result
        // let transact = result.transaction('user', 'readwrite').objectStore('user')
        // let gotten = transact.get(userObj.user.mail)
        // gotten.onsuccess=()=>{
        //     let user = gotten.result
        //     let arr = gotten.result.properties
        //     arr.unshift(userFormData)
        //     user.properties = arr
        //     let update = transact.put(user)
        //     update.onsuccess=()=>{
        //         router.push('./')
        //     }
        // }
    }
    return (
        <>
        <TopBar title={`Properties`}/>
        <PropertyInfo h1Text={`Add a property`}  buttonFunc={formSubmit} buttonText={`Save property`} />
        <FormProperties arrOpt={arr} func={submit} handleInput={handleInput} refference={formRef} isProperty={true} isEdit={isEdit} />
        </>
    )
}