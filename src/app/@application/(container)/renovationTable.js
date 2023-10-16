'use client'
import style from '@/style/expense.module.css'
import ExpensesTable from "./expenseTable"
import ExpenseTitle from './expenseTitle'
export let RenovationTable=({title, btn1, btn2})=>{
    return(
        <div className={style.renovationTable}>
            <ExpenseTitle showCount={true} btnStyle1={`clearBtn`} btnStyle2={`clearBtn`} showDivider={true} title={title} buttonText1={btn1} buttonText2={btn2}  showDropDown={btn2 && true} dividerPos={true}/>
            <ExpensesTable />
        </div>
    )
}