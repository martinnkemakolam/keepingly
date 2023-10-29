'use client'
import { useContext, useState } from "react";
import TopBar from "../(container)/Topbar";
import { ExpenseForm } from "../(container)/expenseForm";
import PropertyInfo from "../(container)/propertyInfo";
import { userContext } from "@/app/userContext";

export let AddExpense =({id})=>{
    let [formData, setFormData] = useState({})
    let userObj = useContext(userContext)
    let submit= async ()=>{
         let category = await fetch(`https://pre.api.keepingly.co/api/v2/expense/category`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Mortgage'
            })
         })
        let json = await category.json()
        console.log(json)
    }
    return(
        <>
        <TopBar title={`Expenses`} btnStyle1={'redFillBtn'} btnFunc1={()=> submit()} buttonText1={`Save expense`} showSearch={true}/>
        <PropertyInfo h1Text={`Add an expense`}/>
        <ExpenseForm />
        </>
    )
}