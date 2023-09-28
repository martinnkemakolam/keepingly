'use client'
import TopBar from "../(components)/Topbar";
import DocumentHeader from "../(components)/documentHeader";
import ExpensesTable from "../(components)/expenseTable";
import ExpenseTitle from "../(components)/expenseTitle";
import PropertyInfo from "../(components)/propertyInfo";

export default function Expenses(params) {
    return (
        <>
        <TopBar title={`Expenses`} btnFunc={()=> console.log('called')} buttonText={"Add an expense"} showSearch={true} />
        <PropertyInfo h1Text={`4517 Washington Ave. Manchester, Kentucky 39495`} showSvg={true}/>
        <ExpenseTitle />
        <ExpensesTable />
        </>
    )
}