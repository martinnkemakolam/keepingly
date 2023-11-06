'use client'

import { api } from "@/app/keepinglyClientApi"
import TopBar from "../(container)/Topbar"
import { CheckListHolder } from "../(container)/checkListHolder"
import ExpenseTitle from "../(container)/expenseTitle"
import { KeepTrackScoreHolder } from "../(container)/keepTrackScoreHolder"
import { MiniTableHolder } from "../(container)/miniTableHolder"
import { ResourcesHolder } from "../(container)/resourcesHolder"
import { Statistics } from "../(container)/statistics"
import { DragAndDrop } from "../(presentation)/dragAndDrop"
import {useRouter} from "next/navigation"
import { useEffect, useRef, useState } from "react"
export let Overview=()=>{
    let [name, setName] = useState('')
    let router = useRouter()
    let downSvg = <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.14661 6.66669L8.47994 10L11.8133 6.66669" stroke="#A61D4A" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> 
    let sendSvg = <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.15" d="M13.8133 2.66669L2.47998 7.33335L7.14665 9.33335L9.14665 14L13.8133 2.66669Z" fill="#A61D4A"/>
    <path d="M13.8133 2.66669L2.47998 7.33335L7.14665 9.33335L9.14665 14L13.8133 2.66669Z" stroke="#A61D4A" stroke-linejoin="round"/>\
    </svg>
    useEffect(()=>{
        (async ()=>{
            let tkn = sessionStorage.getItem('kpuo')
            let apiValue = await api.get('/api/v2/profile/', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tkn}`
                }
            })
            console.log(Array.isArray(apiValue.data))
            Array.isArray(apiValue.data) && apiValue.data[0]?.agency_address !== undefined ? '': router.push('/Setting/completeProfile')
            setName(Array.isArray(apiValue.data) ? apiValue.data[0]?.first_name : '')
            sessionStorage.setItem('kppk', Array.isArray(apiValue.data) ? apiValue.data[0].id : '')
        })()
    }, [router, name])
    return(
        <>
        <TopBar title={`Welcome ${name}`} btnStyle1={`clearBtn`} btnStyle2={`clearBtn`} svg1={downSvg} svg2={sendSvg} buttonText1={`Quick actions`} buttonText2={`Send appraisal document`} showSearch={true}/>
        {/* for realtor remove this button */}
        <ExpenseTitle title={`Accept closing documents`} btnStyle1={`redFillBtn`} underTitle={`Realtor, James Chimdindu provided your closing documents. Please accept them to claim your property.`} buttonText1={`Accept closing documents`}/>
        <Statistics />
        <KeepTrackScoreHolder />
        <CheckListHolder />
        <MiniTableHolder/>
        <ResourcesHolder />
        <DragAndDrop type={`document`} />
        {/* <PropertyInfo h1Text={} buttonText={} paragraph={}/> */}
        </>
    )
}