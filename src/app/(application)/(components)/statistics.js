import ExpenseTitle from "./expenseTitle"
import { StatisticCard } from "./statisticCard"
import style from "@/style/overview.module.css"
export let Statistics=()=>{
    return(
        <div className={style.statistics}>
        <ExpenseTitle title={`Statistics`} text={`All time`} showDropDown={true}/>
        <div className={style.cardHolder} >
            <StatisticCard text={`Total properties`} number={3}/>
            <StatisticCard text={`Total spent`} number={`$5000.00`}/>
            <StatisticCard text={`Checklist items performed`} number={37}/>
        </div>
        </div>
    )
}