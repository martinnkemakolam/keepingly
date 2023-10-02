import Image from "next/image"
import ExpenseTitle from "./expenseTitle"
import style from '@/style/expense.module.css'
export let AlbumPhoto=({text})=>{
    return(
        <div className={style.album}>
            <ExpenseTitle dividerPos={true} title={text} buttonText2={`Attach photos`}/>
            <div>
                <Image alt="" src={''} width={131} height={120}/>
            </div>
        </div>
    )
}