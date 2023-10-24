'use client'
import TopText from "../(container)/topText";
import BottomComp from "../(container)/bottomComp";
import Input from "../(presentation)/input";
import { useState } from "react";
import style from '@/style/auth.module.css'
import { ErrorHook, errorExist, handleInput } from "@/app/reusedFunctions";
export default function ForgotPassword() {
    let [inputValue, setInputValue] = useState({})
    let [err, errMsg, change] = ErrorHook()
    let submit =()=>{
        let error = errorExist(inputValue)
        if (error) {
            change(`Please enter a valid email address`)
        }
        fetch("https://pre.api.keepingly.co/api/v2/forgot_password/", {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": inputValue
            })
        }).then((res)=>{
            console.log(res)
        })
    }
    return(
        <form className={style.modular} onSubmit={(e)=>{
            e.preventDefault()
            submit()
        }}>
        <TopText h1Text={`Forgot your password?`} pText={`Please enter the email address associated with your Keepingly account. We will send you a password reset link to this email.`}/>
        <Input label={`Email address`} name={'mail'}  errorState={err} errorMsg={errMsg} changeFunc={(name, value)=> handleInput(name, value, inputValue, setInputValue)} inputText={'Email address'} password={false}/>
        <BottomComp func={()=> console.log('called')} pText={`Remember password?`} buttonText={`Reset password`} linkHref={`/`} linkText={`Sign in`}/>
        </form>
    )
}