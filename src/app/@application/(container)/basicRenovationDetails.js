import style from "@/style/expense.module.css"
import { RenovationDetail } from "../(presentation)/renovationDetail"

export let BasicRenovationDetails=({dateStart, dateStop, value})=>{
    return(
        <div className={style.basicDetail}>
            <RenovationDetail detail={`Total cost`} value={`${value} USD`}/>
            <RenovationDetail detail={`Data start`} value={dateStart}/>
            <RenovationDetail detail={`Date completed`} value={dateStop}/>
        </div>
    )
}