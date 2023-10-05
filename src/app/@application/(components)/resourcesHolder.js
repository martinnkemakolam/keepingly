import ExpenseTitle from "./expenseTitle"
import style from '@/style/overview.module.css'
import { ResourceCard } from "./resourcesCard"
export let ResourcesHolder=()=>{
    return(
        <div className={style.resourcesHolder}>
            <ExpenseTitle title={`Resources`} buttonText1={`View all`} showDropDown={true}/>
            <div className={style.resourcesCardHolder}>
                <ResourceCard />
                <ResourceCard />
                <ResourceCard />
            </div>
        </div>
    )
}