import { Activity } from "../(presentation)/activity"
import { Grade } from "../(presentation)/grade"
import style from "@/style/keeptrack.module.css"
export let Performance=()=>{
    return(
        <div className={style.performanceHolder}>
            <h1 className={style.innerCircleText1}>Score history</h1>
            <div className={style.activityContent}>
                {/* <Activity text={`June 2023`} point={20}/> */}
                <p>No score in history</p>
            </div>
        </div>
    )
}