'use client'
import style from "@/style/expense.module.css"
import TopBar from "../(container)/Topbar"
import { RenovationTable } from "../(container)/renovationTable"

let Renovation=()=>{
    let filterSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.15" d="M2.6665 2.66663L5.99984 7.99996V12L9.99984 14V7.99996L13.3332 2.66663H2.6665Z" fill="#A61D4A"/>
    <path d="M2.6665 2.66663L5.99984 7.99996V12L9.99984 14V7.99996L13.3332 2.66663H2.6665Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    let exportSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.6665 6.66663L7.99984 9.99996L11.3332 6.66663" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    return(
        <>
        <TopBar title={`Renovations`} buttonText={`Add a renovation`} btnFunc={()=> console.log('called')}/>
        <div className={style.renovationHold}>
            <RenovationTable title={`Kitchen`} btn1={`View renovation`} btn2={`Add expense`}/>
            <RenovationTable title={`Kitchen`} btn1={`View renovation`} btn2={`Add expense`}/>
        </div>
        </>
    )
}
export default Renovation