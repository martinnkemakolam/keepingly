import { useEffect, useState } from "react"
import { MiniTable } from "./miniTable"
import style from "@/style/overview.module.css"
import { api } from "@/app/keepinglyClientApi"
export let MiniTableHolder=()=>{
    let [exp, setExp] = useState([])
    let [ren, setRen] = useState()
    useEffect(()=>{
        (async()=>{ 
            let tkn = sessionStorage.getItem('kpuo')
            let data = await api.get('/api/v2/get/all/renovation/', {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${tkn}`
                }
            })
            setRen(data.data.data[0])
            let exp = api.get('/api/v2/get_expense/',{
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${tkn}`
                }
            })
            setExp(exp.data.data)
        })()
    }, [])
    return(
        <div className={style.miniTable}>
            <MiniTable title={`Expenses`} btnText={`View all expenses`} data={exp}/>
            <MiniTable title={`Ongoing renovations`} btnText={`View all renovations`} data={exp.filter((ele)=> ele.expense_type.name.toLowerCase() === `${ren.section} renovation`.toLowerCase())}/>
        </div>
    )
}