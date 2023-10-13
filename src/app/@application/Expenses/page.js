'use client'

import { useRouter } from "next/navigation";
import TopBar from "../(components)/Topbar";
import DocumentHeader from "../(components)/documentHeader";
import { ExpenseFooter } from "../(components)/expenseFooter";
import ExpensesTable from "../(components)/expenseTable";
import ExpenseTitle from "../(components)/expenseTitle";
import PropertyInfo from "../(components)/propertyInfo";

export default function Expenses(params) {
    let router = useRouter()
    let filterSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.15" d="M2.66675 2.66669L6.00008 8.00002V12L10.0001 14V8.00002L13.3334 2.66669H2.66675Z" fill="#A61D4A"/>
    <path d="M2.66675 2.66669L6.00008 8.00002V12L10.0001 14V8.00002L13.3334 2.66669H2.66675Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    let exportSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.66675 6.66669L8.00008 10L11.3334 6.66669" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    return (
        <>
        <TopBar title={`Expenses`} btnFunc1={()=> router.push('/Expenses/addExpense')} buttonText1={"Add an expense"} showSearch={true} />
        <PropertyInfo h1Text={`4517 Washington Ave. Manchester, Kentucky 39495`} showSvg={true}/>
        <ExpenseTitle title={`Expenses`} svg1={filterSvg} buttonText1={`Filters`} svg2={exportSvg} buttonText2={`Export as`}/>
        <ExpensesTable />
        <ExpenseFooter currentPage={1} lastPage={2}/>
        </>
    )
}