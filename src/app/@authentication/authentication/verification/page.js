'use client'
import { useEffect, useState } from "react";
import style from "../../../../style/auth.module.css"
import BottomComp from "../../(component)/bottomComp";
import TopText from "../../(component)/topText";
import { InputContainer } from "../../container/InputContainer";

export default function Verification(){
    let [count, setCount] = useState(60)
    let [link, setLink] = useState('')
    useEffect(()=>{
        let recall=()=>{
            if (count === 0) {
                setLink('resend link')
                return
            }
            setTimeout(()=>{
                setCount(count - 1)
            }, 1000)
        }
        recall()
    }, [count])
    return(
        <form className={style.modular}>
            <TopText h1Text={`Verification`} pText={`Please enter the One-Time Password (OTP) that was sent to <email address>.`}/>
            <InputContainer />
            <BottomComp pText={`Didn’t get the OTP? Resend link in  ${count}`} buttonText={`Verify`} linkHref={'/'} linkText={link}/>
        </form>
    )
}