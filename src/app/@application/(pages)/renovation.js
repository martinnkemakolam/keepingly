'use client'
import style from "@/style/expense.module.css"
import TopBar from "../(container)/Topbar"
import { RenovationTable } from "../(container)/renovationTable"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {api} from "@/app/keepinglyClientApi"


let Renovation=()=>{
    let router = useRouter()
    let filterSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.15" d="M2.6665 2.66663L5.99984 7.99996V12L9.99984 14V7.99996L13.3332 2.66663H2.6665Z" fill="#A61D4A"/>
    <path d="M2.6665 2.66663L5.99984 7.99996V12L9.99984 14V7.99996L13.3332 2.66663H2.6665Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    let exportSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.6665 6.66663L7.99984 9.99996L11.3332 6.66663" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    let crossSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.00008 4.66669V11.3334M4.66675 8.00002L11.3334 8.00002" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    let [prop, setProp] = useState([])
    useEffect(()=>{
        let callSelf = async()=>{
            let tkn = sessionStorage.getItem('kpuo')
            let data = await api.get('/api/v2/get/all/renovation/', {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${tkn}`
                }
            })
            setProp(data.data.data || [])
        }
        callSelf()
    }, [])
    return(
        <>
        <TopBar title={`Renovations`} buttonText1={`Add a renovation`} showSearch={true} btnStyle1={`redFillBtnInv`} svg1={crossSvg} btnFunc1={()=> router.push('./Renovation/addRenovation')}/>
        <div className={style.renovationHold}>
            {
                prop.map((ele)=>{
                    console.log(ele)
                    return <><RenovationTable title={`Kitchen`} btn1={`View renovation`} btn2={`Add expense`} renovationId={ele.id} propId={ele.property_id.id} prop={ele.section + ' renovation'}/></>
                })
            }
        </div>
        </>
    )
}
export default Renovation