import { ButtonDivider } from "./buttonDivider"
import { Point } from "./point"
import Tick from "./tick"
import style from "@/style/keeptrack.module.css"

export let Checklist=({text})=>{
    return(
        <div className={style.checkList}>
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
                <Tick className={style}/>
            </div>
            <ButtonDivider buttonText1={`Add expense`} buttonText2={`Upload documents`}/>
        </div>
    )
}