'use client'
import { useEffect, useRef, useState } from "react";
import TopBar from "../../(components)/Topbar";
import PropertyInfo from "../../(components)/propertyInfo";
import FormProperties from "../../(hoc)/form";
import { useRouter } from "next/navigation";

export default function AddProperty() {
    let formRef = useRef()
    let router = useRouter()
    let db = useRef()
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
                        placeholder: 'Enter address',
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
        let result = db.current.result
        let transact = result.transaction('user', 'readwrite').objectStore('user')
        let gotten = transact.get(0)
        gotten.onsuccess=()=>{
            let user = gotten.result
            let arr = gotten.result.properties
            arr.unshift(userFormData)
            user.properties = arr
            transact.delete(0).onsuccess=()=>{
                transact.add(user).onsuccess=()=>{
                    router.push('./')
                }
            }
        }
    }
    useEffect(()=>{
        db.current = indexedDB.open('keepinglyDB', 1.0)
        db.onsuccess=()=>{
            let result = db.result
            let transact = result.transaction('user', 'readwrite').objectStore('user')
            let mail = transact.get(0)
            mail.onsuccess=()=>{
                if (mail.result) {
                    if (mail.result.properties.length > 1){
                        setIsEdit(true)
                    }else{
                        setIsEdit(false)
                    }
                    return
                }
                return
                }
            }
    }, [])
    return (
        <>
        <TopBar title={`Properties`}/>
        <PropertyInfo h1Text={`Add a property`} buttonFunc={formSubmit} buttonText={`Save property`} />
        <FormProperties arrOpt={arr} func={submit} handleInput={handleInput} refference={formRef} isProperty={true} isEdit={isEdit} />
        </>
    )
}