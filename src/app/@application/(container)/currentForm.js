import { useState } from "react"
import { FormPage } from "./formPage"
import { FormUpload } from "./formUpload"
import style from "@/style/expense.module.css"
export let CurrentForm=({view, handleInput, value})=>{
    let array = 
        {
            h1: 'Expense details',
            p: 'Fill all the required information',
            arr: [
                {
                    label: 'Expense name',
                    placeholder: 'Enter expense name',
                    type: 'text',
                    name: 'expenseName'
                },{
                    label: 'Amount (in US dollars)',
                    placeholder: 'Enter amount',
                    type: 'number',
                    name: "amount"
                },{
                    label: 'Paid to',
                    placeholder: 'Enter recipient',
                    type: 'text',
                    name: "paid_to"
                },{
                    label: 'Expense type',
                    placeholder: 'Select expense type',
                    type: 'text',
                    name: "expense_type"
                },{
                    label: 'Date',
                    placeholder: 'Select date',
                    type: 'date',
                    name: "date"
                }
            ]
        }
        
    return(
        <div className={style.multiForm}>
            <div className={ view === 1 ? style.display : style.noDisplay}>
                <FormPage values={value} btnText={`Save`} showButton={true} ele={array} handleInput={handleInput}/> 
            </div>
            <div className={ view === 2 ? style.display : style.noDisplay}>
                <FormUpload h1Text={`Documents`} pText={`Please provide receipts, invoices, or any document showing proof of expense.
                Uploading these documents is crucial for ensuring the authenticity and validity of the maintenance work.`} type={`document`}/>
            </div>
            <div className={ view === 3 ? style.display : style.noDisplay}>
                <FormUpload h1Text={`Photos`} pText={`You can upload up to 12 photos.`} type={`photo`}/>
            </div>
            <div className={ view === 4 ? style.display : style.noDisplay}>
                <FormUpload h1Text={`Videos`} pText={`You can upload up to 6 videos.`} type={`video`}/>
            </div>
        </div>
    )
}