import ExpenseTitle from "./expenseTitle"
import style from '@/style/overview.module.css'
import { ResourceCard } from "../(presentation)/resourcesCard"
export let ResourcesHolder=()=>{
    return(
        <div className={style.resourcesHolder}>
            <ExpenseTitle title={`Resources`} btnStyle1={`clearBtn`} buttonText1={`View all`} showDropDown={true}/>
            <div className={style.resourcesCardHolder}>
                <p>No resources available</p>
                {/* <ResourceCard />
                <ResourceCard />
                <ResourceCard /> */}
            </div>
        </div>
    )
}