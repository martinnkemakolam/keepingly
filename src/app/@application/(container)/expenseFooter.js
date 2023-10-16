import { ClearBtn } from "../(presentation)/clearBtn"
import style from "@/style/expense.module.css"
export let ExpenseFooter=({currentPage, lastPage})=>{
    let arrowLeft = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.66675 8L11.3334 8M4.66675 8L7.33341 5.33333M4.66675 8L7.33341 10.6667" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    let arrowRight = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3334 8L4.66675 8M11.3334 8L8.66675 10.6667M11.3334 8L8.66675 5.33334" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>        
    return(
        <div className={style.footer}>
            <div className={style.footerRow}>
                <p className={style.footerText}>Results per page</p>
                <span className={style.span}>10</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <ClearBtn btnStyle={`clearBtnReverse`} text={`Previous`}  svg={arrowLeft} />
            <p className={style.span}>
                {currentPage} of {lastPage}
            </p>
            <ClearBtn btnStyle={`clearBtn`} text={`Next`} svg={arrowRight} />
        </div>
    )
}