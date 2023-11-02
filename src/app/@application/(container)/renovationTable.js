'use client'
import style from '@/style/expense.module.css'
import ExpensesTable from "./expenseTable"
import ExpenseTitle from './expenseTitle'
import { useEffect, useState } from 'react'
import { api } from '@/app/keepinglyClientApi'
import { useRouter } from 'next/navigation'
export let RenovationTable=({title, btn1, btn2, prop, renovationId,propId, viewRenoFunc})=>{
    let [data, setData] = useState([])
    let router = useRouter()
    useEffect(()=>{
        let tkn = sessionStorage.getItem('kpuo')
        api.get(`/api/v2/get_expense/`,{
            headers:{
                Authorization: `Bearer ${tkn}`,
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            setData(res.data.data)
        })
    }, [])
    return(
        <div className={style.renovationTable}>
            <ExpenseTitle showCount={data.filter((ele)=> ele.expense_type.name.toLowerCase() === prop.toLowerCase()).length} btnStyle1={`clearBtn`} btnStyle2={`clearBtn`} btnFunc1={()=> viewRenoFunc ? router.push(`/Expenses/addExpense?id=${propId}&&expense_type=${prop}`) : router.push(`/Renovation/${renovationId}`)} btnFunc2={()=>router.push(`./Expenses/addExpense?id=${propId}&&expense_type=${prop}`)} showDivider={true} title={title} buttonText1={btn1} buttonText2={btn2}  showDropDown={btn2 && true} dividerPos={true}/>
            <ExpensesTable data={data.filter((ele)=> ele.expense_type.name.toLowerCase() === prop.toLowerCase())}/>
        </div>
    )
}