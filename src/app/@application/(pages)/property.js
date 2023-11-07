'use client'
import { useRouter } from "next/navigation"
import TopBar from "../(container)/Topbar"
import Table from "../(container)/table"
import { useEffect, useState } from "react"
import { api } from "@/app/keepinglyClientApi"
export let Properties=()=>{
    let [property, setProperty]=useState([])
    let router = useRouter()
    let btnFunc =()=>{
        router.push('./Properties/addproperty')
    }
    useEffect(()=>{
        (async()=>{
            let tk = sessionStorage.getItem('kpuo')
            const res = await api.get("/api/v2/get_property_user/", {
                cache: "no-cache",
                'headers': { 
                    Authorization: `Bearer ${tk}` 
                },
                mode: 'cors'
            })
            console.log(res.data)
            setProperty(res.data || [])
        })()
    }, [])
    return (
        <>
        {/* {console.log('this is your cookie in property',document.cookie)} */}
            <TopBar title={`Properties`} showSearch={true} btnStyle1={`redFillBtn`} buttonText1={`Add a property`} btnFunc1={btnFunc} />
            <Table h1Text={`Available properties`} arrProperties={property || []} />
        </>
    )
}