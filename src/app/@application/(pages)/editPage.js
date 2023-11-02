'use client'
import { useContext, useEffect, useRef, useState } from "react"
import TopBar from "../(container)/Topbar"
import PropertyInfo from "../(container)/propertyInfo"
import FormProperties from "../(container)/form"
import { useRouter } from "next/navigation"
import { userContext } from "@/app/userContext"
import { api } from "../../keepinglyClientApi"

export default function EditProperty({id}) {
    let userObj = useContext(userContext)
    let arr = [
        {
            h1: 'Property details',
            p: 'All fields are required',
            arr: [
                {
                    label: 'Address (Line 1)',
                    placeholder: 'Enter address',
                    type: 'text',
                    name: 'address_one'
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
    // let db = useRef()
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
    let [disable, setDisable] = useState(true)
    let changeButtonOrSubmit=()=>{
        setDisable(false)
        if (disable === false) {
            formRef.current.click()
        }
    }
    let dbEdit =()=>{
        let tkn = sessionStorage.getItem('kpuo')
        let data = {
            "address_one": userData.address_one,
            "address_two": "string",
            "city": userData.city,
            "state": userData.state,
            "zipcode": userData.zipcode
          }
        api.patch(`/api/v2/update/property/${id.id}/`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tkn}`
            }
        })
        .then((res)=>res.ok && router.push('./'))
    }
    useEffect(()=>{
        setUserData(id)
    }, [id])
    
    return(
        <>
        {console.log(id)}
        <TopBar title={`Properties`}/>
        <PropertyInfo isEdit={disable} showSvg={true} h1Text={`${id.address_one},${id.city},${id.state} ${id.zipcode}`} buttonText={ disable ?`Edit property`: `Save property`} buttonFunc={changeButtonOrSubmit} func={dbEdit}/>
        <FormProperties disable={disable} arrOpt={arr} isProperty={false} isEdit={true} file={id?.file} values={id} handleInput={handleInput} func={dbEdit} refference={formRef}/>
        </>
    )
}
