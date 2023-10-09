'use client'
import TopText from "../../container/topText";
import BottomComp from "../../container/bottomComp";
import Input from "../../presentation/input";
import { useState } from "react";
import style from '@/style/auth.module.css'
export default function ForgotPassword(params) {
    let [inputValue, setInputValue] = useState(``)
    return(
        <form className={style.modular}>
        <TopText h1Text={`Forgot your password?`} pText={`Please enter the email address associated with your Keepingly account. We will send you a password reset link to this email.`}/>
        <Input label={`Email address`}  errorState={false} errorMsg={`email not found`} changeFunc={setInputValue} inputText={'Email address'} password={false}/>
        <BottomComp func={()=> console.log('called')} pText={`Remember password?`} buttonText={`Reset password`} linkHref={`/authentication/`} linkText={`Sign in`}/>
        </form>
    )
}