'use client'

import TopBar from "../(container)/Topbar"
import { CheckListHolder } from "../(container)/checkListHolder"
import ExpenseTitle from "../(container)/expenseTitle"
import { KeepTrackScoreHolder } from "../(container)/keepTrackScoreHolder"
import { MiniTableHolder } from "../(container)/miniTableHolder"
import { ResourcesHolder } from "../(container)/resourcesHolder"
import { Statistics } from "../(container)/statistics"
import { DragAndDrop } from "../(presentation)/dragAndDrop"

export let Overview=()=>{
    let downSvg = <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.14661 6.66669L8.47994 10L11.8133 6.66669" stroke="#A61D4A" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> 
    let sendSvg = <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.15" d="M13.8133 2.66669L2.47998 7.33335L7.14665 9.33335L9.14665 14L13.8133 2.66669Z" fill="#A61D4A"/>
    <path d="M13.8133 2.66669L2.47998 7.33335L7.14665 9.33335L9.14665 14L13.8133 2.66669Z" stroke="#A61D4A" stroke-linejoin="round"/>
    </svg>       
    let dropEvt =(ev)=>{
        ev.preventDefault()
        let arr = Array.from(ev.dataTransfer.items)
        arr.forEach(element => {
            element.getAsFile()
            console.log(element.getAsFile().name)
        });
    }
    return(
        <>
        <TopBar title={`Welcome David`} btnStyle1={`clearBtn`} btnStyle2={`clearBtn`} svg1={downSvg} svg2={sendSvg} buttonText1={`Quick actions`} buttonText2={`Send appraisal document`} showSearch={true}/>
        <ExpenseTitle title={`Accept closing documents`} btnStyle1={`redFillBtn`} underTitle={`Realtor, James Chimdindu provided your closing documents. Please accept them to claim your property.`} buttonText1={`Accept closing documents`}/>
        <Statistics />
        <KeepTrackScoreHolder />
        <CheckListHolder />
        <MiniTableHolder/>
        <ResourcesHolder />
        <DragAndDrop type={`document`} dropEvt={dropEvt}/>
        {/* <PropertyInfo h1Text={} buttonText={} paragraph={}/> */}
        </>
    )
}