'use client'
import { useState } from "react"
import { KeepTrackScoreHolder } from "../(container)/keepTrackScoreHolder"
import TopBar from "../(container)/Topbar"
import { CheckListHolder } from "../(container)/checkListHolder"
import Overlay from "../(container)/overlay"

export let KeepTrack=()=>{
    let [view, setView]=useState(true)
    return(
        <>
        <TopBar title={`KeepTrack`} showSearch={true}/>
        <KeepTrackScoreHolder />
        <CheckListHolder/>
        {
            view && <Overlay overlay={`keeptrack`} closeFunc={()=> setView(false)}/>
        }
        </>
    )
}

export default KeepTrack