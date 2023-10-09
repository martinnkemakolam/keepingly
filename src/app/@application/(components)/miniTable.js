import ExpenseTitle from "./expenseTitle"
import { OverviewTable } from "./overviewTable"
import style from '@/style/overview.module.css'
export let MiniTable=({title, btnText})=>{
    let arrowLeft = <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.8133 8L5.14661 7.99999M11.8133 8L9.14661 10.6667M11.8133 8L9.14661 5.33333" stroke="#A61D4A" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    return(
        <div className={style.miniTableHolder}>
            <ExpenseTitle title={title} buttonText1={btnText} svg1={arrowLeft}/>
            <OverviewTable/>
        </div>
    )
}