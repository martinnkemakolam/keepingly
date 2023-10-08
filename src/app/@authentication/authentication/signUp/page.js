'use client'
import { useState } from "react";
import AuthButton from "../../presentation/authButton";
import BottomComp from "../../container/bottomComp";
import DivOr from "../../presentation/divOr";
import Input from "../../presentation/input";
import TopText from "../../container/topText";
import style from "../../../../style/auth.module.css"
import { VisibleChnage, handleInput } from "@/app/reusedFunctions";
import { useRouter } from "next/navigation";
export default function Register(params) {
    let [passwordConfirm, setPasswordConfirm] = useState({})
    let [user, setUser] = useState({})
    let [mailError, setMailError] = useState(false)
    let [passwordError, setPasswordError] = useState(false)
    let router = useRouter()
    let [input1, setInput1, input2, setInput2] = VisibleChnage()
    let submit =()=>{
        if (passwordConfirm.confirm !== user.password) {
            setPasswordError(true)
            return
        }
        let db = indexedDB.open('keepinglyDB', 1)
        db.onsuccess=()=>{
            let result = db.result
            let userStore = result.transaction('user', "readwrite").objectStore('user')
            let mail = userStore.get(user.mail || '')
            mail.onsuccess=()=>{
                if (mail.result){
                    setMailError(true)
                }else{
                    userStore.put(user)
                    router.push('./verification')
                }
            }
        }
    }
    return(
        
        <form className={style.modular} onSubmit={(e)=>{
            e.preventDefault()
            submit()
        }}>
        <TopText h1Text={`Register to get started`} pText={`Easily maintain and manage your home with Keepingly.`} />
        <div className={style.form}>
            <AuthButton google={true} pText={`Register with Google`}/>
            <AuthButton google={false} pText={`Register with Apple`}/>
            <DivOr/>
            <Input name={'mail'} type={'email'} inputText={`Email address`} errorMsg={'mail already used'} errorState={mailError} changeFunc={(name, value)=> handleInput(name, value, user, setUser)}/>
            <Input name={'password'} setPass={()=>setInput1(!input1)} type={input1 ? 'text' : 'password'} inputText={`Password`} errorMsg={'password doesnt match'} errorState={passwordError} changeFunc={(name, value)=> handleInput(name, value, user, setUser)}/>
            <p style={{fontSize: '0.75rem', fontWeight: '600'}}>
            Your password must be at least 8 characters long and include a combination of uppercase letters, lowercase letters, numbers, and special characters.
            </p>
            <Input name={'confirm'} setPass={()=>setInput2(!input2)} type={input2 ? 'text' : 'password'} inputText={`Confirm password`} errorMsg={'Password doesnt match'} errorState={passwordError} changeFunc={(name, value)=> handleInput(name, value, passwordConfirm, setPasswordConfirm)}/>
            <p className={style.signupText}>
            By signing up, you agree that you are a US resident, 18 years or older, and you accept Keepingly’s <span className={style.colRed}>Terms and Conditions</span> and <span className={style.colRed}>Privacy Policy.</span>
            </p>
        </div>
        <BottomComp func={()=> null} buttonText={`Register`} pText={`Already have an account?`} linkHref={`/`} linkText={`Sign in`} />
        </form>
    )
}