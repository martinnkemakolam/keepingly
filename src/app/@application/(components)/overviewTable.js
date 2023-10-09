import style from "@/style/expense.module.css"
import { OverviewTableRow } from "./overviewTableRow"
export let OverviewTable=()=>{
    return(
        <table className={style.table}>
            <tr className={style.tableRow}>
                <th className={style.th + ' ' + style.small}>S/N</th>
                <th className={style.th}>
                    EXPENSE 
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.15" d="M3.14661 2.66667H13.8133V13.3333H3.14661V2.66667Z" fill="#333333"/>
                        <path d="M10.4799 6.66667L8.47994 4.66667L6.47994 6.66667M6.47994 9.33334L8.47994 11.3333L10.4799 9.33334M3.14661 2.66667H13.8133V13.3333H3.14661V2.66667Z" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </th>
                <th className={style.th}>PAID TO</th>
                <th className={style.th + ' ' + style.meduim}>AMOUNT ($)</th>
            </tr>
            <OverviewTableRow/>
        </table>
    )
}