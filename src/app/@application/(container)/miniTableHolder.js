import { MiniTable } from "./miniTable"
import style from "@/style/overview.module.css"
export let MiniTableHolder=()=>{
    return(
        <div className={style.miniTable}>
            <MiniTable title={`Expenses`} btnText={`View all expenses`}/>
            <MiniTable title={`Ongoing renovations`} btnText={`View all renovations`}/>
        </div>
    )
}