import TopBar from "../../(components)/Topbar";
import { ExpenseForm } from "../../(components)/expenseForm";
import PropertyInfo from "../../(components)/propertyInfo";

export default function addExpense(){
    return(
        <>
        <TopBar title={`Expenses`} buttonText={`Save expense`} showSearch={true}/>
        <PropertyInfo h1Text={`Add an expense`}/>
        <ExpenseForm />
        </>
    )
}