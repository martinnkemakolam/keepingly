'use client'
import TopText from "../../(component)/topText";
import BottomComp from "../../(component)/bottomComp";
import Input from "../../(component)/input";
import { useState } from "react";

export default function ForgotPassword(params) {
    let [inputValue, setInputValue] = useState(``)
    return(
        <>
        <TopText h1Text={`Forgot your password?`} pText={`Please enter the email address associated with your Keepingly account. We will send you a password reset link to this email.`}/>
        <Input errorState={false} errorMsg={`email not found`} changeFunc={setInputValue} inputText={'Email address'} password={false}/>
        <BottomComp func={()=> console.log('called')} pText={`Remember password?`} buttonText={`Reset password`} linkHref={`/authentication/`} linkText={`Sign in`}/>
        </>
    )
}