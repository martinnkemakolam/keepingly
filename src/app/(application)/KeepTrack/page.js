'use client'
import { useState } from "react"
import TopBar from "../(components)/Topbar"
import Overlay from "../(components)/overlay"
import { CheckListHolder } from "../(components)/checkListHolder"
import { KeepTrackScoreHolder } from "../(components)/keepTrackScoreHolder"

let KeepTrack=()=>{
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