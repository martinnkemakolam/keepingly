'use client'
import { useState } from "react"
import FormProperties from "../(hoc)/form"
import TopBar from "../(components)/Topbar"
export default function Properties(params) {
    // fetch user data on page mount, if none set formFiled to false
    let [formFiled, setFormFiled] = useState(false)
    return (
        <>
        {
            formFiled ? <TopBar title={`Properties`} buttonText={`Add a property`}/> : <TopBar title={`Welcome to Keepingly`}/>
        }
        <svg width="42" height="2" viewBox="0 0 42 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H41" stroke="#A61D4A" stroke-linecap="round"/>
        </svg>
        { formFiled ? <div>Properties</div> : <FormProperties setFormFiled={setFormFiled}/> 
        }
        </>
    )
}