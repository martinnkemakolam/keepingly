import { DropdownLi } from "../(presentation)/dropDownLi";
import style from '@/style/expense.module.css'
export default function ExpenseDropDow({show}){
    let arrowSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3332 8.00004L4.6665 8.00004M11.3332 8.00004L8.6665 10.6667M11.3332 8.00004L8.6665 5.33337" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    let plusSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.99984 4.66663V11.3333M4.6665 7.99996L11.3332 7.99996" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    return (
        <>
        {show && <div className={style.menu}>
            <DropdownLi text={`View expense`} svg={arrowSvg}/>
            <DropdownLi text={`Add document`} svg={plusSvg}/>
            <DropdownLi  text={`Add photo`} svg={plusSvg}/>
            <DropdownLi  text={`Add photo`} svg={plusSvg}/>
        </div>}
        </>
    )
}