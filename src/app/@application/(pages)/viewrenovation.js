'use client'

import { useEffect, useRef, useState } from "react"
import TopBar from "../(container)/Topbar"
import { AlbumPhoto } from "../(container)/albumPhoto"
import { BasicRenovationDetails } from "../(container)/basicRenovationDetails"
import ExpenseTitle from "../(container)/expenseTitle"
import { RenovationTable } from "../(container)/renovationTable"
import { api } from "@/app/keepinglyClientApi";
export let ViewRenovation=({data})=>{
    let [amount, setAmount] = useState([])
    useEffect(()=>{
        let tkn = sessionStorage.getItem('kpuo')
        api.get(`/api/v2/get_expense/`,{
            headers:{
                Authorization: `Bearer ${tkn}`,
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            setAmount(res.data.data.filter((ele)=> ele.expense_type.name.toLowerCase() === `${data.section} renovation`.toLowerCase()))
        })
    }, [setAmount, data])
    return(
        <>
        {
            console.log([0, 1, 2, 3].reduce((a, b)=>a + b))
        }
        <TopBar showSearch={true} title={`Building renovation`} buttonText={`Go back to Renovations`}/>
        <ExpenseTitle title={`Basic details`} showDropDown={true}/>
        <BasicRenovationDetails dateStart={data.date_started} dateStop={data.date_complete} value={ `${ amount.length === 0 ? 0 : ''} ${amount.length === 1 ? amount[0].amount : ''} ${amount > 1 ? amount.reduce((ele_A, ele_B)=> ele_A.amount + ele_B.amount) : ''}`}/>
        <RenovationTable prop={`${data.section} renovation`} propId={data.property_id.id} renovationId={data.id} viewRenoFunc={true} title={data.section} btn1={`Add expense`}/>
        <ExpenseTitle  title={`Photos`} showDivider={true} showDropDown={`true`}/>
        <AlbumPhoto text={`Before`} />
        <AlbumPhoto text={`During`} />
        <AlbumPhoto text={`After`} />
        </>
    )
}