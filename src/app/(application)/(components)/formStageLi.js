import style from '@/style/expense.module.css'
export let FormStageLi=({text, svg})=>{
    return(
        <div className={style.stageLi}>
            <p className={style.stageLiText}>{text}</p>
            {svg}
        </div>
    )
}