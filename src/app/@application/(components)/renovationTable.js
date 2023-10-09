'use client'
import style from '@/style/expense.module.css'
import ExpenseTitle from "../(components)/expenseTitle"
import ExpensesTable from "./expenseTable"
export let RenovationTable=({title, btn1, btn2})=>{
    return(
        <div className={style.renovationTable}>
            <ExpenseTitle showCount={true} showDivider={true} title={title} buttonText1={btn1} buttonText2={btn2} showDropDown={btn2 && true} dividerPos={true}/>
            <ExpensesTable />
        </div>
    )
}