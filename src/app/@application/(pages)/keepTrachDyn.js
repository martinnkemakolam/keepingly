import TopBar from "../(container)/Topbar";
import { ExpenseForm } from "../(container)/expenseForm";
import PropertyInfo from "../(container)/propertyInfo";


export default function KeepTrackDyn(){
    return(
        <>
        <TopBar title={`Test and inspect smoke and carbon monoxide detector`} showSearch={true}/>
        <PropertyInfo h1Text={`Add an expense`}/>
        <ExpenseForm />
        </>
    )
}