import { Activity } from "../(presentation)/activity"
import { ClearBtn } from "../(presentation)/clearBtn"
import style from "@/style/keeptrack.module.css"
export let Activites=()=>{
    let svg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.15" d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" fill="#A61D4A"/>
    <path d="M8 11.3333L8 6.66667M8 4.67331V4.66665M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    
    return(
        <div className={style.activities}>
            <h1 className={style.innerCircleText1}>Recent activity</h1>
            <div className={style.activityContent}>
                <p>No recent activities</p>
            </div>
        </div>
    )
}