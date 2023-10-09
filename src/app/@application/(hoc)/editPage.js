'use client'
import { useEffect, useRef, useState } from "react"
import TopBar from "../(components)/Topbar"
import PropertyInfo from "../(components)/propertyInfo"
import FormProperties from "./form"
import { useRouter } from "next/navigation"

export default function EditProperty({id}) {
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
        }
    ]
    let router = useRouter()
    let formRef = useRef()
    let db = useRef()
    let [userData, setUserData] = useState({})
    let handleInput =(name, value)=>{
        setUserData(n=>{
            return(
                {
                    ...userData,
                    [name]: value
                }
            )
        }
        )
    }
    let [disable, setDisable] = useState( true)
    let changeButtonOrSubmit=()=>{
        setDisable(false)
        if (disable === false) {
            formRef.current.click()
        }
    }
    let dbEdit =()=>{
        let result = db.current.result
        let store = result.transaction('user', "readwrite").objectStore('user')
        let user = store.get(0)
        user.onsuccess=()=>{
            if (user.result) {
                let property = id
                let newData = user.result.properties.map((ele, id)=>{
                    if(id === +property){
                        return userData
                    }
                    return ele
                })
                store.put({
                    ...user.result,
                    properties: newData
                }).onsuccess=()=>{
                    router.push('./')
                }
            }
        }
    }
    useEffect(()=>{
        db.current = indexedDB.open('keepinglyDB', 1.0)
        db.current.onsuccess=()=>{
            let result = db.current.result
            let transact = result.transaction('user', 'readwrite').objectStore('user')
            let mail = transact.get(0)
            mail.onsuccess=()=>{
                if (mail.result) {
                    let property = id
                    let newData = mail.result.properties.filter((ele,id)=> id === +property)
                    console.log(id, newData)
                    setUserData(newData[0])
                    return
                }
            }
        }
    }, [id])
    
    return(
        <>
        <TopBar title={`Properties`}/>
        <PropertyInfo isEdit={disable} showSvg={true} h1Text={`${userData?.address1},${userData?.cty},${userData?.state} ${userData?.zipcode}`} buttonText={ disable ?`Edit property`: `Save property`} buttonFunc={changeButtonOrSubmit} func={dbEdit}/>
        <FormProperties disable={disable} arrOpt={arr} isProperty={false} isEdit={true} file={userData?.file} values={userData} handleInput={handleInput} func={dbEdit} refference={formRef}/>
        </>
    )
}
