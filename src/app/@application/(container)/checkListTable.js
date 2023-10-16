"use client"
import { Checklist } from "./checkList"
import style from "@/style/keeptrack.module.css"
export let CheckListTable=()=>{
    return(
        <div className={style.checkListTable}>
            <Checklist text={`Test and inspect smoke and carbon monoxide detectors`} />
        </div>
    )
}