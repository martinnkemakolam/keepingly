import style from "@/style/expense.module.css"
import { RenovationDetail } from "./renovationDetail"

export let BasicRenovationDetails=()=>{
    return(
        <div className={style.basicDetail}>
            <RenovationDetail detail={`Total cost`} value={`18,880 USD`}/>
            <RenovationDetail detail={`Data start`} value={`18-10-2023`}/>
            <RenovationDetail detail={`Date completed`} value={`18-8-2024`}/>
        </div>
    )
}