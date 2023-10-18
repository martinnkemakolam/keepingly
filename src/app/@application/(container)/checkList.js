import { ButtonDivider } from "./buttonDivider"
import { Point } from "../(presentation)/point"
import Tick from "../(presentation)/tick"
import style from "@/style/keeptrack.module.css"
import { useState } from "react"

export let Checklist=({text})=>{
    let [click, setClick] = useState(false)
    return(
        <div className={style.checkList} onClick={()=> setClick(!click)}>
            <div className={style.checkListContent}>
                <div className={style.checkListContentText}>
                    <p>{text}</p>
                    <div className={style.tags}>
                        <Point point={20}/>
                        <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.66663" cy="2" r="2" fill="#D2D2D2"/>
                        </svg>
                        <p>Due in 5days</p>
                    </div>
                </div>
                <Tick ticked={click} className={style}/>
            </div>
            <ButtonDivider buttonText1={`Add expense`} buttonText2={`Upload documents`} btnStyle1={`clearBtn`} btnStyle2={`clearBtn`}/>
        </div>
    )
}