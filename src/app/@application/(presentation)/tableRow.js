import ExpenseDropDow from "../(container)/expenseDropDow";
import style from "@/style/expense.module.css"
export default function TableRow({no, showFunc, expId,id,show, expense, expenseType, amount, paidto, date, hide}) {
    return (
        <tr className={style.tableRow}>
            <td className={style.td + ' ' + style.small}>{no}</td>
            <td className={style.td}>{expense}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>{paidto}</td>
            <td className={style.td}>{expenseType}</td>
            <td className={style.td+ ' ' + style.medium }>{date}</td>
            <td className={style.td+ ' ' + style.small} onClick={()=>showFunc(id)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00016 8.66663C8.36835 8.66663 8.66683 8.36815 8.66683 7.99996C8.66683 7.63177 8.36835 7.33329 8.00016 7.33329C7.63197 7.33329 7.3335 7.63177 7.3335 7.99996C7.3335 8.36815 7.63197 8.66663 8.00016 8.66663Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.00016 3.99996C8.36835 3.99996 8.66683 3.70148 8.66683 3.33329C8.66683 2.9651 8.36835 2.66663 8.00016 2.66663C7.63197 2.66663 7.3335 2.9651 7.3335 3.33329C7.3335 3.70148 7.63197 3.99996 8.00016 3.99996Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.00016 13.3333C8.36835 13.3333 8.66683 13.0348 8.66683 12.6666C8.66683 12.2984 8.36835 12 8.00016 12C7.63197 12 7.3335 12.2984 7.3335 12.6666C7.3335 13.0348 7.63197 13.3333 8.00016 13.3333Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </td>
            {hide.id === id && hide.isOpen && <ExpenseDropDow id={expId} show={show}/>}
        </tr>
    )
}