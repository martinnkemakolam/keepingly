import { FormStageLi } from "../(presentation)/formStageLi"
import style from '@/style/expense.module.css'
export let FormStage=()=>{
    let svg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66667 11.3333L10 7.99999L6.66667 4.66666" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    return(
        <div className={style.stage}>
            <FormStageLi text={`Expense details`} svg={svg}/>  
            <FormStageLi text={`Documents`} svg={svg}/>  
            <FormStageLi text={`Photos`} svg={svg}/> 
            <FormStageLi text={`Videos`} svg={svg}/>  
        </div>
    )
}