'use client'
import { useContext, useState } from "react";
import TopBar from "../(container)/Topbar";
import { ExpenseForm } from "../(container)/expenseForm";
import PropertyInfo from "../(container)/propertyInfo";
import { api } from "@/app/keepinglyClientApi";
import { handleInput } from "../../reusedFunctions";
import { useRouter } from "next/navigation";

export let AddExpense =({id, edit})=>{
    let [formData, setFormData] = useState({})
    let router = useRouter()    
    let submit= async ()=>{
        let expForm
        let tkn = sessionStorage.getItem('kpuo')
        let exp = await api.get('/api/v2/get/', {
            headers: {
                'Content-type': 'application/json'
            }
        })
        let currentType = exp.data.filter(element => element.name.toLowerCase() === (Object.values(id)[1].toLowerCase() || formData?.expense_type?.toLowerCase() || edit.expense_type.name.toLowerCase()));
        if (currentType.length > 0) {
            expForm = currentType[0].id
        }else{
            let data2 = {
                name: Object.values(id)[1] || formData.expenseType
            }
             let category = await api.post(`/api/v2/expense/category/`, data2,{
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${tkn}`
                }
             })
             console.log(category)
            let json = await category.data
            expForm = json.id
        }
        let dataToSend = {
            "expense_type": expForm,
            "amount": formData.amount || edit.amount,
            "paid_to": formData.paid_to || edit.paid_to,
            "date": formData.date || edit.date
          }
        if (id) {
        let propId = Object.values(id)
        let addExpense = await api.post(`/api/v2/expense/${propId[0]}/`, dataToSend, {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${tkn}`
            }
        })
        addExpense.data.success && router.push('./')
        }else{
            let data = await api.patch(`/api/v2/update/expense/${edit.id}/`, dataToSend, {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${tkn}`
                    
                }
            })
            console.log(data)
            data.data.success && router.push('./')
        }
        
    }
    return(
        <>

        <TopBar title={`Expenses`} btnStyle1={'redFillBtn'} btnFunc1={()=> submit()} buttonText1={`Save expense`} showSearch={true}/>
        <PropertyInfo h1Text={`Add an expense`}/>
        <ExpenseForm handleInput={(name, value)=> handleInput(name, value, formData, setFormData)} value={ edit?{
            amount: edit.amount,
            paid_to: edit.paid_to,
            expense_type: edit.expense_type.name,
            date: edit.date
        }: {
            amount: '',
            paid_to: '',
            expense_type: '',
            date: ''
        }} />
        </>
    )
}