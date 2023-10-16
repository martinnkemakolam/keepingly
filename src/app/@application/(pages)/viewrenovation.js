'use client'

import TopBar from "../(container)/Topbar"
import { AlbumPhoto } from "../(container)/albumPhoto"
import { BasicRenovationDetails } from "../(container)/basicRenovationDetails"
import ExpenseTitle from "../(container)/expenseTitle"
import { RenovationTable } from "../(container)/renovationTable"

export let ViewRenovation=()=>{
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