import style from '@/style/expense.module.css'
export let DropdownLi =({ text, svg})=>{
    return (
        <div className={style.menuLi}>
            <p className={style.menuLiText}>
            {text}
            </p>
                {svg}
        </div>
    )
}