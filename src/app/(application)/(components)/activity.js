import { Point } from "./point"
import style from "@/style/keeptrack.module.css"
export let Activity=({text, point})=>{
    return(
        <div className={style.activity}>
            <p className={style.activityText}>{text}</p>
            <Point point={point}/>
        </div>
    )
}