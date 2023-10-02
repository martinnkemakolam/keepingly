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
        <RenovationTable />
        <ExpenseTitle title={`Photos`} showDropDown={`true`}/>
        <AlbumPhoto text={`Before`} />
        <AlbumPhoto text={`During`} />
        <AlbumPhoto text={`After`} />
        </>
    )
}
export default ViewRenovation