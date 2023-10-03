import style from "@/style/expense.module.css"
export let OverviewTableRow =()=>{
    return(
        <tr className={style.tableRow}>
                <td className={style.td  + ' ' + style.small}>1</td>
                <td className={style.td}>Building maintenance</td>
                <td className={style.td}>Sacony Construction</td>
                <td className={style.td + ' ' + style.meduim}>$10.00</td>
        </tr>
    )
}