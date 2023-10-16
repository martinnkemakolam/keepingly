'use client'
import { useEffect, useState } from "react";
import TopBar from "../(container)/Topbar";
import FormProperties from "../(container)/form";

export let Setting=()=>{
    let arrObj = [
        {
            h1: 'Profile settings'
        },
        {
            h1: 'Notification settings',
        },
        {
            h1: 'Account settings',
        }
    ]
    let [file, setFile] = useState('')
    useEffect(()=>{
        let db = indexedDB.open('keepinglyDB', 1.0)
        db.onsuccess=()=>{
            let result = db.result
            let store = result.transaction('user', 'readonly').objectStore('user')
            let userData = store.get(0)
            userData.onsuccess=()=>{
                console.log(userData.result)
                setFile(userData.result.file)
            }
        }
    },[])
    return(
        <>
            <TopBar title={'Settings'} showSearch={true}/>
            <FormProperties arrOpt={arrObj} isProperty={false} file={file} />
        </>
    )
}