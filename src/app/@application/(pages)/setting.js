'use client'
import { useEffect, useState } from "react";
import TopBar from "../(container)/Topbar";
import FormProperties from "../(container)/form";
import { api } from "@/app/keepinglyClientApi";

export let Setting=()=>{
    let [data, setData] = useState()
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
        (async ()=>{
            let tkn = sessionStorage.getItem('kpuo')
            let apiValue = await api.get('/api/v2/profile/', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tkn}`
                }
            })
            setData(apiValue.data)
        })()
    },[])
    return(
        <>
            <TopBar title={'Settings'} showSearch={true}/>
            <FormProperties arrOpt={arrObj} isProperty={false} file={file} />
        </>
    )
}