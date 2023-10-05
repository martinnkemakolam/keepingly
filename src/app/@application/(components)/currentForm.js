import { useState } from "react"
import { FormPage } from "./formPage"
import { FormUpload } from "./formUpload"
export let CurrentForm=({view})=>{
    let [userData, setUserData] = useState()
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
                    name: 'expenseAmout'
                },{
                    label: 'Paid to',
                    placeholder: 'Enter recipient',
                    type: 'text',
                    name: 'paidTo'
                },{
                    label: 'Expense type',
                    placeholder: 'Select expense type',
                    type: 'text',
                    name: 'expenseType'
                },{
                    label: 'Date',
                    placeholder: 'Select date',
                    type: 'date',
                    name: 'expenseDate'
                }
            ]
        }
        let handleInput =(name, value)=>{
            setUserData(n=>{
                return(
                    {
                        ...userData,
                        [name]: value
                    }
                )
            }
            )
        }
    return(
        <>
        { view === 0 && <FormPage btnText={`Save`} showButton={true} ele={array} handleInput={handleInput}/> }
        { view === 1 && <FormUpload h1Text={`Documents`} pText={`Please provide receipts, invoices, or any document showing proof of expense.
Uploading these documents is crucial for ensuring the authenticity and validity of the maintenance work.`} type={`document`}/>}
        { view === 2 && <FormUpload h1Text={`Photos`} pText={`You can upload up to 12 photos.`} type={`photo`}/> }
        { view === 3 && <FormUpload h1Text={`Videos`} pText={`You can upload up to 6 videos.`} type={`video`}/> }
        </>
    )
}