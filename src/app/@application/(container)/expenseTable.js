import { useState } from "react";
import TableRow from "../(presentation)/tableRow";
import style from "@/style/expense.module.css"
export default function ExpensesTable({data}) {
    let [showDropDown, setShowDropDown] = useState({
        isOpen: false,
        id: null
    })
    let openDropDown=(arg)=>{
        setShowDropDown({
            isOpen: true,
            id: arg
        })
    }
    let closeDropDown=()=>{
        if (showDropDown.isOpen) {
            setShowDropDown({
                isOpen: false,
                id: null
            })   
        }
    }
    return(
        <div className={style.table} onClick={closeDropDown}>
            <table className={style.table2}>
            <tr className={style.tableRow}>
                <th className={style.th + ' ' + style.small}>S/N</th>
                <th className={style.th}>
                    EXPENSE
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.15" d="M3.1665 2.66663H13.8332V13.3333H3.1665V2.66663Z" fill="#333333"/>
                        <path d="M10.4998 6.66663L8.49984 4.66663L6.49984 6.66663M6.49984 9.33329L8.49984 11.3333L10.4998 9.33329M3.1665 2.66663H13.8332V13.3333H3.1665V2.66663Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </th>
                <th className={style.th}>AMOUNT (USD)</th>
                <th className={style.th}>PAID TO</th>
                <th className={style.th}>EXPENSE TYPE</th>
                <th className={style.th + ' ' + style.medium}>DATE</th>
                <th className={style.th + ' ' + style.small}></th>
            </tr>
            {
                data.map((ele, id)=>{
                    console.log(ele)
                    if (ele === undefined) {
                        return
                    }
                    return <><TableRow showFunc={openDropDown} id={id} expId={ele.id} hide={showDropDown} show={showDropDown} no={id + 1} expense={ele.expense_type.name} amount={ele.amount} paidto={ele.paid_to} expenseType={ele.expense_type.name} date={ele.date}/></>
                })
            }
        </table> 
        </div>
    )
}