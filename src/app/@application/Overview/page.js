'use client'
import TopBar from "../(components)/Topbar"
import { CheckListHolder } from "../(components)/checkListHolder"
import { CheckListTable } from "../(components)/checkListTable"
import { DragAndDrop } from "../(components)/dragAndDrop"
import ExpenseTitle from "../(components)/expenseTitle"
import { KeepTrackScoreHolder } from "../(components)/keepTrackScoreHolder"
import { MiniTableHolder } from "../(components)/miniTableHolder"
import { ResourcesHolder } from "../(components)/resourcesHolder"
import { Statistics } from "../(components)/statistics"

let Overview=()=>{
    let downSvg = <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.14661 6.66669L8.47994 10L11.8133 6.66669" stroke="#A61D4A" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> 
    let sendSvg = <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.15" d="M13.8133 2.66669L2.47998 7.33335L7.14665 9.33335L9.14665 14L13.8133 2.66669Z" fill="#A61D4A"/>
    <path d="M13.8133 2.66669L2.47998 7.33335L7.14665 9.33335L9.14665 14L13.8133 2.66669Z" stroke="#A61D4A" stroke-linejoin="round"/>
    </svg>       
    return(
        <>
        <TopBar title={`Welcome David`} svg1={downSvg} svg2={sendSvg} buttonText1={`Quick actions`} buttonText2={`Send appraisal document`} showSearch={true}/>
        <ExpenseTitle title={`Accept closing documents`} underTitle={`Realtor, James Chimdindu provided your closing documents. Please accept them to claim your property.`} buttonText1={`Accept closing documents`}/>
        <Statistics />
        <KeepTrackScoreHolder />
        <CheckListHolder />
        <MiniTableHolder/>
        <ResourcesHolder />
        <DragAndDrop type={`document`}/>
        {/* <PropertyInfo h1Text={} buttonText={} paragraph={}/> */}
        </>
    )
}
export default Overview