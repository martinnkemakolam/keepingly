import TopBar from "../(container)/Topbar";
import { ExpenseForm } from "../(container)/expenseForm";
import PropertyInfo from "../(container)/propertyInfo";

export let AddExpense =()=>{
    return(
        <>
        <TopBar title={`Expenses`} buttonText1={`Save expense`} showSearch={true}/>
        <PropertyInfo h1Text={`Add an expense`}/>
        <ExpenseForm />
        </>
    )
}