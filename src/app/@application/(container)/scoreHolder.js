import { Activites } from "./activities"
import { Performance } from "./performance"
import { Score } from "../(presentation)/score"
import style from '@/style/keeptrack.module.css'
export let ScoreHolder=()=>{
    let lineSvg = <svg width="1" height="80" viewBox="0 0 1 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.5" y1="0.5" x2="0.499997" y2="79.5" stroke="#D2D2D2" stroke-linecap="round"/>
    </svg>
    
    return(
        <div className={style.frame}>
            <Score />
            <Performance/>
            <Activites/>
        </div>
    )
}