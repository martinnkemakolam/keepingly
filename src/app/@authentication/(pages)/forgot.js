'use client'
import TopText from "../(container)/topText";
import BottomComp from "../(container)/bottomComp";
import Input from "../(presentation)/input";
import { useState } from "react";
import {useRouter} from "next/navigation"
import style from '@/style/auth.module.css'
import { ErrorHook, handleInput, validMail } from "@/app/reusedFunctions";
import { api } from "@/app/keepinglyClientApi";
export default function ForgotPassword() {
    let router = useRouter()
    let [inputValue, setInputValue] = useState({})
    let [err, errMsg, change] = ErrorHook()
    let [loadingState, setLoadingState] = useState(false)
    let submit = async()=>{
        setLoadingState(true)
        let error = validMail(inputValue)
        if (error) {
            change(`Email not valid`)
        }
        let dataSent = {
            "email": inputValue.mail
        }
        let apiData = await api.post("https://pre.api.keepingly.co/api/v2/forgot_password/", dataSent,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        apiData && setLoadingState(false)
        apiData.status === 200 && router.push('/') 
    }
    return(
        <form className={style.modular} onSubmit={(e)=>{
            e.preventDefault()
            submit()
        }}>
        <TopText h1Text={`Forgot your password?`} pText={`Please enter the email address associated with your Keepingly account. We will send you a password reset link to this email.`}/>
        <Input label={`Email address`} name={'mail'}  errorState={err} errorMsg={errMsg} changeFunc={(name, value)=> handleInput(name, value, inputValue, setInputValue)} inputText={'Email address'} password={false}/>
        <BottomComp func={()=> console.log('called')} pText={`Remember password?`}  buttonText={loadingState?`Loading...`: `Reset password`} col={loadingState} linkHref={`/`} linkText={`Log in`}/>
        </form>
    )
}