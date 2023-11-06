'use client'
import style from "@/style/auth.module.css"
import Link from "next/link";
import TopText from "../(container)/topText";
import AuthButton from "../(presentation)/authButton";
import DivOr from "../(presentation)/divOr";
import Input from "../(presentation)/input";
import BottomComp from "../(container)/bottomComp";
import { ErrorHook, VisibleChnage, errorExist, handleInput, validMail } from "@/app/reusedFunctions";
import { useContext, useState } from "react";
import { UserContext, userContext } from "../../userContext";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { api } from "@/app/keepinglyClientApi";

export default function SignIn ({setCookies}){
    let [loginDetail, setLoginDetails] = useState({})
    let [remember, setRemember] = useState(false)
    // let [passwordError, setPasswordError] = useState(false)
    let [mailError, errMsg, setMailError] =  ErrorHook()
    let [passError, passMsg, setPassError] =  ErrorHook()
    let [input1, setInput1] = VisibleChnage()
    let [loadingState, setLoadingState] = useState(false)
    let {setUser} = useContext(userContext)
    let router = useRouter()
    let submit= async()=>{
        setLoadingState(true)
        if(!validMail(loginDetail)){
            setMailError('Emai not valid')
            return
        }
        let sentData = {
            "email": loginDetail.mail,
            "password": loginDetail.password
        }
        console.log(sentData)
        let loginData = await api.post('/api/v2/signin', sentData,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = loginData.data
        if (loginData.status === 200) {
            console.log('This is success ' ,data)
            setUser(data)
            UserContext.setView(true)
            localStorage.setItem('kprt', data.refresh_token)
            sessionStorage.setItem('kpur', data.role)
            sessionStorage.setItem('kpuo', data.access_token)
            remember && localStorage.setItem('staylogged', data.access_token)
            document.cookie = `kpat = ${data.access_token};`
            document.cookie = `kprt = ${data.refresh_token};`
            return
        }
        loginData.status === 404 && setPassError(`Incorrect password`)
        loginData.status === 404 && setMailError(`Email not found`)
        loginData && setLoadingState(false)
        console.log('this is failed call', data, loginData)
    }
    return (
        <form className={style.modular} onSubmit={(e)=>{
            e.preventDefault()
            submit()
        }}>
        <TopText h1Text={`Log in to your account`} pText={`Easily maintain and manage your home with Keepingly.`}/>
        <AuthButton google={true} pText={`Log in with Google`}/>
        <AuthButton google={false} pText={`Log in with Apple`}/>
        <DivOr/>
        <Input label={`Email address`} name={`mail`} changeFunc={(name, value)=> handleInput( name, value, loginDetail, setLoginDetails)} inputText={`Email address`} errorMsg={errMsg} errorState={mailError} />
        <Input label={`Password`} name={`password`} changeFunc={(name, value)=> handleInput( name, value, loginDetail, setLoginDetails)} setPass={()=>setInput1(!input1)} type={input1 ? 'text' : 'password'} inputText={`Password`} errorMsg={passMsg} errorState={passError} />
        <div className={style.checkBox}>
            <div className={style.label}>
                <input type="checkbox" id="remember" checked={remember} onClick={()=>setRemember(!remember)}/>
                <label htmlFor="remember">Remember me</label>
            </div>
            <Link className={style.colRed} href={`/authentication/forgot`}>Forgot password?</Link>   
        </div>
        <BottomComp func={()=> null} buttonText={ loadingState?`Loading...`: `Log in`} col={loadingState} pText={`Don’t have an account yet?`} linkHref={`/authentication/signUp`} linkText={`Register`}/>
        </form>
    )
}