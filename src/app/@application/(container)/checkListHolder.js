import { CheckListTable } from "./checkListTable"
import ExpenseTitle from "./expenseTitle"
import style from "@/style/keeptrack.module.css"
export let CheckListHolder=()=>{
    return(
        <div className={style.checkListHolder}>
            <ExpenseTitle title={`KeepTrack checklist`} text={`To-do`} showDropDown={true}/>
            <CheckListTable />
        </div>
    )
}