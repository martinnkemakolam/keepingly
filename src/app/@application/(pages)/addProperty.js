'use client'
import { useContext, useEffect, useId, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { userContext } from "@/app/userContext";
import TopBar from "../(container)/Topbar";
import PropertyInfo from "../(container)/propertyInfo";
import FormProperties from "../(container)/form";
import { randomUUID } from "crypto";
import { api } from "../../keepinglyClientApi";

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
                        name: 'city'
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
    let submit = ()=>{
        let tkn = sessionStorage.getItem('kpuo')
        let data = {
                "id": crypto.randomUUID(),
                "address_one": userFormData.address1,
                "address_two": userFormData.address2,
                "city": userFormData.city,
                "state": userFormData.state,
                "zipcode": userFormData.zipcode,
            }
            // console.log(localStorage.getItem('kpat'))
            console.log('This the user access tkn', tkn)
        api.post('/api/v2/property', data, {headers: {
            'accept': '*/*',
            'access_token': tkn,
            "Authorization": `Bearer ${tkn}`,
            'Content-Type': "application/json"
        }})
        .then((res)=> console.log( res.config.headers.Authorization,res.data, res.headers))
    }
    return (
        <>
        <TopBar title={`Properties`}/>
        <PropertyInfo h1Text={`Add a property`}  buttonFunc={formSubmit} buttonText={`Save property`} />
        <FormProperties arrOpt={arr} func={submit} handleInput={handleInput} refference={formRef} isProperty={true} isEdit={isEdit} />
        </>
    )
}