'use client'

import TopBar from "@/app/(application)/(components)/Topbar"
import { useRouter } from "next/navigation"

import Table from "../(components)/table"
import { useEffect, useState } from "react"
export default function Properties() {
    // fetch user data on page , if none set formFiled to false
    let [properties, setProperties] = useState([])
    let router = useRouter()
    let btnFunc =()=>{
        router.push('./Properties/addproperty')
    }
    useEffect(()=>{
        let db = indexedDB.open('keepinglyDB', 1.0)
    db.onsuccess=()=>{
        let result = db.result
        let transact = result.transaction('user', 'readwrite').objectStore('user')
        let mail = transact.get(0)
        mail.onsuccess=()=>{
            if (mail.result) {
                setProperties(mail.result.properties)
                return
            }
            transact.add({
                id: 0, properties: []
            })
            return
            }
        }
        db.onupgradeneeded=()=>{
            let result = db.result
            result.createObjectStore('user', {keyPath: 'id'})
        }
    }, [router])
    return (
        <>
            <TopBar title={`Properties`} buttonText={`Add a property`} btnFunc={btnFunc} />
            <Table h1Text={`Available properties`} arrProperties={properties}/>
        </>
    )
}