'use client'
import style from "@/style/auth.module.css"
import Link from "next/link";
import TopText from "../(container)/topText";
import AuthButton from "../(presentation)/authButton";
import DivOr from "../(presentation)/divOr";
import Input from "../(presentation)/input";
import BottomComp from "../(container)/bottomComp";
import { ErrorHook, VisibleChnage, handleInput } from "@/app/reusedFunctions";
import { useContext, useState } from "react";
import { UserContext, userContext } from "../../userContext";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export default function SignIn (){
    let [loginDetail, setLoginDetails] = useState({})
    // let [mailError, setMailError] = useState(false)
    let [remember, setRemember] = useState(false)
    // let [passwordError, setPasswordError] = useState(false)
    let [mailError, errMsg, setMailError] =  ErrorHook()
    let [passError, passMsg, setPassError] =  ErrorHook()
    let [input1, setInput1, input2, setInput2] = VisibleChnage()
    let {setUser} = useContext(userContext)
    let router = useRouter()
    let submit=()=>{
        //pattern={ type === 'password'  || type === 'text' ?`(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@#&!$%^*+=?|~:;/"'<>{}()[\],.]).{8,}` :"/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"}
        // let db = indexedDB.open('keepinglyDB', 1)
        // db.onsuccess=()=>{
        //     let result = db.result
        //     let store = result.transaction('user', "readwrite").objectStore('user')
        //     let user = store.get(loginDetail.mail)
        //     user.onsuccess=()=>{
        //         if (user.result) {
        //            if(user.result.password === loginDetail.password ){
        //                 
        //                 sessionStorage.setItem('mail', `${loginDetail.mail}`)
        //                 remember && localStorage.setItem('mail', `${loginDetail.mail}`)
        //                 
        //             }else {
        //                 
        //             }
        //         }else{
        //             // call no user
        //         }
        //     }
        // }

        
        
        fetch('https://pre.api.keepingly.co/api/v2/signin',{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                "email": loginDetail.mail,
                "password": loginDetail.password
            })
        }).then((res)=>{
            console.log(res)
            if (res.ok) {
                return res.json()   
            }else if (res.status === 401){
                setPassError(`Incorrect password`)        
            }else{
                setMailError(`email not found`)
            }
        })
        .then(res =>{
            setUser(res)
            UserContext.setView(true)
            router.push('/Setting/completeProfile')
        })
    }
    return (
        <form className={style.modular} onSubmit={(e)=>{
            e.preventDefault()
            submit()
        }}>
        <TopText h1Text={`Sign in to your account`} pText={`Easily maintain and manage your home with Keepingly.`}/>
        <AuthButton google={true} pText={`Sign in with Google`}/>
        <AuthButton google={false} pText={`Sign in with Apple`}/>
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
        <BottomComp func={()=> null} buttonText={`Sign in`} pText={`Don’t have an account yet?`} linkHref={`/authentication/signUp`} linkText={`Register`}/>
        </form>
    )
}