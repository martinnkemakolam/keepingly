import style from "@/style/expense.module.css"
export let RenovationDetail=({detail, value})=>{
    return(
        <div className={style.renovationDetail}>
            <p className={style.detailText1}>{detail}</p>
            <p className={style.detailText2}>{value}</p>
        </div>
    )
}