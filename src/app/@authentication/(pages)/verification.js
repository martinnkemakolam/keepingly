'use client'
import { useEffect, useState } from "react";
import style from "@/style/auth.module.css"
import BottomComp from "../(container)/bottomComp";
import TopText from "../(container)/topText";
import { InputContainer } from "../(container)/InputContainer";
import { useRouter } from "next/navigation";

export default function Verification(){
    let [count, setCount] = useState(60)
    let [link, setLink] = useState('')
    let router = useRouter()
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
    }, [count, router])
    return(
        <form className={style.modular} onSubmit={(e)=>{
            e.preventDefault()
            router.push('/')
        }}>
            <TopText h1Text={`Verification`} pText={`Please enter the One-Time Password (OTP) that was sent to <email address>.`}/>
            <InputContainer />
            <BottomComp pText={`Didn’t get the OTP? ${ count === 0 ? '' : `Resend link in ${count}`}`} buttonText={`Verify`} linkHref={'/'} linkText={link}/>
        </form>
    )
}