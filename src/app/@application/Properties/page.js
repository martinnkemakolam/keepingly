'use client'

import TopBar from "@/app/@application/(components)/Topbar"
import { useRouter } from "next/navigation"

import Table from "../(components)/table"
import { useContext, useEffect, useState } from "react"
import { userContext } from "@/app/userContext"
export default function Properties() {
    // fetch user data on page , if none set formFiled to false
    let [properties, setProperties] = useState([])
    let router = useRouter()
    let userObj = useContext(userContext)
    let btnFunc =()=>{
        router.push('./Properties/addproperty')
    }
    useEffect(()=>{
        let db = indexedDB.open('keepinglyDB', 1.0)
    db.onsuccess=()=>{
        let result = db.result
        let transact = result.transaction('user', 'readwrite').objectStore('user')
        let mail = transact.get(userObj.user.mail)
        mail.onsuccess=()=>{
            if (mail.result) {
                setProperties(mail.result.properties)
                return
            }else{
                alert('no mail')
            }
        }
        }
    }, [router, userObj])
    return (
        <>
            <TopBar title={`Properties`} showSearch={true} buttonText1={`Add a property`} btnFunc1={btnFunc} />
            <Table h1Text={`Available properties`} arrProperties={properties} />
        </>
    )
}