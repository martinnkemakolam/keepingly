import style from '@/style/expense.module.css'
import ExpenseTitle from "../(components)/expenseTitle"
import ExpensesTable from "./expenseTable"
export let RenovationTable=()=>{
    return(
        <div className={style.renovationTable}>
            <ExpenseTitle title={'Swiming pool'} buttonText1={`View renovation`} buttonText2={`Add expense`} showDropDown={true} dividerPos={true}/>
            <ExpensesTable />
        </div>
    )
}