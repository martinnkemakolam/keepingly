'use cient'
import ExpenseTitle from "./expenseTitle"
import {StatisticCard} from "../(presentation)/statisticCard"
import style from "@/style/overview.module.css"
import { useEffect, useState } from "react"
import { api } from "@/app/keepinglyClientApi"
export let Statistics=()=>{
    let [propNum, setPropNum] = useState(0)
    let [expNum, setExpNum] = useState(0)
    useEffect(()=>{
        (async()=>{ 
            let tk = sessionStorage.getItem('kpuo')
            const res = await api.get("/api/v2/get_property_user/", {
                cache: "no-cache",
                'headers': { 
                    Authorization: `Bearer ${tk}` 
                },
                mode: 'cors'
            })
            console.log(res.data)
            setPropNum(res.data?.length || 0)
            let exp = await api.get('/api/v2/get_expense/',{
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${tk}`
                }
            })
            setExpNum(exp.data.data)
        })()
    }, [])
    return(
        <div className={style.statistics}>
            <ExpenseTitle title={`Statistics`} text={`All time`} showDropDown={true}/>
            <div className={style.cardHolder} >
                <StatisticCard text={`Total properties`} number={propNum}/>
                <StatisticCard text={`Total spent`} number={`$${ expNum?.length === 0 ? 0 : '0'} ${expNum?.length === 1 ? expNum[0].amount : ''} ${expNum?.length > 1 ? expNum?.reduce((ele_A, ele_B)=> ele_A.amount + ele_B.amount) : ''}`}/>
                <StatisticCard text={`Checklist items performed`} number={'0'}/>
            </div>
        </div>
    )
}