import { useEffect } from "react"
import ExpenseTitle from "./expenseTitle"
import { ScoreHolder } from "./scoreHolder"
import style from "@/style/keeptrack.module.css"
export let KeepTrackScoreHolder=()=>{
    return(
        <div className={style.keepTrackScoreHolder}>
            <ExpenseTitle title={`KeepTrack score`} text={`361 Cedar Street Seattle, WA 98121`} showDropDown={true}/>
            <ScoreHolder/>
        </div>
    )
}