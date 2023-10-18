'use client'
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { userContext } from "@/app/userContext"
import TopBar from "../(container)/Topbar"
import Table from "../(container)/table"
export let Properties=()=>{
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
        console.log(userObj.user.mail)
        let mail = transact.get(userObj.user.mail || '')
        mail.onsuccess=()=>{
            if (mail.result) {
                setProperties(mail.result.properties)
                return
            }else{
                //alert('no mail')
            }
        }
        }
    }, [router, userObj])
    return (
        <>
            <TopBar title={`Properties`} showSearch={true} btnStyle1={`redFillBtn`} buttonText1={`Add a property`} btnFunc1={btnFunc} />
            <Table h1Text={`Available properties`} arrProperties={properties} />
        </>
    )
}