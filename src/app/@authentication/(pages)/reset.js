'use client'
import { useState } from "react";
import BottomComp from "../(container)/bottomComp";
import TopText from "../(container)/topText";
import style from '@/style/auth.module.css'
import {useRouter } from "next/navigation";
import Input from "../(presentation)/input";
import { api } from "@/app/keepinglyClientApi";
export default function Reset({query}) {
    let router = useRouter()
    let [firstPassword, setFirstPassword] = useState('')
    let [loadingState, setLoadingState] = useState(false)
    let [secondPassword, setSecondPassword] = useState('')
    let [errorState, setErrorState] = useState(false)
    function validatePassword() {
        if (firstPassword === secondPassword) {
            setErrorState(false)
            router.push('/authentication/success')    
            return
        }else{
            setErrorState(true)
        }
    }
    let submit = ()=>{
        setLoadingState(true)
        // get token and userid
        let data = {
            "new_password": firstPassword,
            "confirm_password": secondPassword
          }
          let newStr = query.id.slice(0, -1);
        api.post(`api/v2/password/reset/${query.tkn}/${newStr}/`, data,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res)=>{
            console.log(res)
            setLoadingState(false)
            router.push('/')
        })
    }
    return(
        <form className={style.modular} onSubmit={(e)=>{
            e.preventDefault()
            submit()
        }}>
            {console.log(query)}
        <TopText h1Text={`Forgot your password?`} pText={`Please enter the email address associated with your Keepingly account. We will send you a password reset link to this email.`}/>
        <div className={style.form}>
            <Input label={`Password`} password={true} inputText={`Password`} errorState={errorState} errorMsg={`Password don't match`} changeFunc={setFirstPassword}/>
            <p>
            Your password must be at least 8 characters long and include a combination of uppercase letters, lowercase letters, numbers, and special characters.
            </p>
            <Input label={`Confirm password`} password={true} inputText={`Comfirm password`} errorState={errorState} errorMsg={`Password don't match`} changeFunc={setSecondPassword}/>
        </div>
        <BottomComp func={validatePassword} pText={`Remember password?`} linkHref={`/`} linkText={`Sign in`} col={loadingState} buttonText={ loadingState? "loading...": `Reset password`}/>
        </form>
    )
}