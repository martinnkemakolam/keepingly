'use client'
import style from '@/style/expense.module.css'
import { FormStage } from './formStage'
import { CurrentForm } from './currentForm'
export let ExpenseForm=({handleInput, value})=>{
    return(
        <form className={style.form}>
            <FormStage />
            <CurrentForm handleInput={handleInput} view={1} value={value}/>
        </form>
    )
}