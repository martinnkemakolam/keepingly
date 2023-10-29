'use client'
import { useContext, useState } from "react";
import TopBar from "../(container)/Topbar";
import { ExpenseForm } from "../(container)/expenseForm";
import PropertyInfo from "../(container)/propertyInfo";
import { userContext } from "@/app/userContext";

export let AddExpense =({id})=>{
    let [formData, setFormData] = useState({})
    let userObj = useContext(userContext)
    console.log(userObj.user.access_token)
    let submit= async ()=>{
        let key = Object.keys(id.searchParams)
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
        // fetch(`https://pre.api.keepingly.co/api/v2/expense/${key}/`,{
        //     method: 'POST',
        //     headers: {
        //         Authorization: `Bearer ${userObj.user.access_token}`,
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         "expense_type": "9b909e6f-0b05-4436-8ad2-63b6351967ab",
        //         "amount": 100,
        //         "paid_to": "dummy user",
        //         "date": "2023-10-25"
        //       })
        // }).then(res=> res.json())
        // .then(res => console.log(res))
    }
    return(
        <>
        <TopBar title={`Expenses`} btnStyle1={'redFillBtn'} btnFunc1={()=> submit()} buttonText1={`Save expense`} showSearch={true}/>
        <PropertyInfo h1Text={`Add an expense`}/>
        <ExpenseForm />
        </>
    )
}