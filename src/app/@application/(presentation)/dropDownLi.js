import style from '@/style/expense.module.css'
import Link from 'next/link'

export let DropdownLi =({ id,text, svg})=>{
    return (
        <Link href={`/Expenses/[id]`} as={`/Expenses/${id}`} style={{width: `100%`}}>
        <div className={style.menuLi}>
            <p className={style.menuLiText}>
            {text}
            </p>
                {svg}
        </div>
        </Link>
    )
}