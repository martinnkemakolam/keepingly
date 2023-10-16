import style from "@/style/overview.module.css"
export let StatisticCard=({text, number})=>{
    return(
        <div className={style.card}>
            <p className={style.cardText}>{text}</p>
            <p className={style.cardNum}>{number}</p>
        </div>
    )
}