'use client'
import TopBar from "../../(components)/Topbar"
import { AlbumPhoto } from "../../(components)/albumPhoto"
import { BasicRenovationDetails } from "../../(components)/basicRenovationDetails"
import ExpenseTitle from "../../(components)/expenseTitle"
import { RenovationTable } from "../../(components)/renovationTable"

let ViewRenovation=()=>{
    return(
        <>
        <TopBar showSearch={true} title={`Building renovation`} buttonText={`Go back to Renovations`}/>
        <ExpenseTitle title={`Basic details`} showDropDown={true}/>
        <BasicRenovationDetails />
        <RenovationTable title={`Kitchen`} btn1={`Add expense`}/>
        <ExpenseTitle title={`Photos`} showDivider={true} showDropDown={`true`}/>
        <AlbumPhoto text={`Before`} />
        <AlbumPhoto text={`During`} />
        <AlbumPhoto text={`After`} />
        </>
    )
}
export default ViewRenovation