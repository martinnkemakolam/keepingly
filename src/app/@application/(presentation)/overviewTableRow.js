import style from "@/style/expense.module.css"
export let OverviewTableRow =({sn, expType, paidTo, amount})=>{
    return(
        <tr className={style.tableRow}>
                <td className={style.td  + ' ' + style.small}>{sn}</td>
                <td className={style.td}>{expType}</td>
                <td className={style.td}>{paidTo}</td>
                <td className={style.td + ' ' + style.meduim}>{amount}</td>
        </tr>
    )
}