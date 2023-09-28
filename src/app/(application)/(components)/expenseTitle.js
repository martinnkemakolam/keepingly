import style from '@/style/expense.module.css'
import { Count } from './count'
import { ClearBtn } from './clearBtn'
export default function ExpenseTitle(){
    let filterSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.15" d="M2.6665 2.66663L5.99984 7.99996V12L9.99984 14V7.99996L13.3332 2.66663H2.6665Z" fill="#A61D4A"/>
    <path d="M2.6665 2.66663L5.99984 7.99996V12L9.99984 14V7.99996L13.3332 2.66663H2.6665Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    let exportSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.6665 6.66663L7.99984 9.99996L11.3332 6.66663" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    return(
        <div className={style.header}>
            <div className={style.title}>
                <p className={style.titleText}>Expenses</p>
                <Count count={20}/>
            </div>
            <div className={style.divider}>
                <ClearBtn text={`Filters`} svg={filterSvg}/>
                <svg width="2" height="9" viewBox="0 0 2 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 8C0.5 8.27614 0.723857 8.5 1 8.5C1.27614 8.5 1.5 8.27614 1.5 8L0.5 8ZM0.5 -2.18557e-08L0.5 8L1.5 8L1.5 2.18557e-08L0.5 -2.18557e-08Z" fill="#D2D2D2"/>
                </svg>
                <ClearBtn text={`Export as`} svg={exportSvg}/>
            </div>
        </div>
    )
}