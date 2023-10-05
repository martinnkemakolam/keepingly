'use client'
import style from '@/style/expense.module.css'
import { FormStage } from './formStage'
import { CurrentForm } from './currentForm'
export let ExpenseForm=()=>{
    return(
        <form className={style.form}>
            <FormStage />
            <CurrentForm view={1}/>
        </form>
    )
}