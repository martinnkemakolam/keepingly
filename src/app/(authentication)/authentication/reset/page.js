'use client'
import { useState } from "react";
import BottomComp from "../../(component)/bottomComp";
import TopText from "../../(component)/topText";
import style from '../../../../style/auth.module.css'
import {useRouter } from "next/navigation";
import Input from "../../(component)/input";
export default function Reset(params) {
    let router = useRouter()
    let [firstPassword, setFirstPassword] = useState('')
    let [secondPassword, setSecondPassword] = useState('')
    let [errorState, setErrorState] = useState(false)
    function validatePassword() {
        console.log('called')
        if (firstPassword === secondPassword) {
            setErrorState(false)
            router.push('/authentication/success')    
            return
        }else{
            setErrorState(true)
        }
    }
    return(
        <>
        <TopText h1Text={`Forgot your password?`} pText={`Please enter the email address associated with your Keepingly account. We will send you a password reset link to this email.`}/>
        <div className={style.form}>
            <Input password={true} inputText={`Password`} errorState={errorState} errorMsg={`Password don't match`} changeFunc={setFirstPassword}/>
            <Input password={true} inputText={`Comfirm password`} errorState={errorState} errorMsg={`Password don't match`} changeFunc={setSecondPassword}/>
        </div>
        <BottomComp func={validatePassword} pText={`Remember password?`} linkHref={`/authentication/`} linkText={`Sign in`} buttonText={`Reset password`}/>
        </>
    )
}