'use client'
import { useEffect, useState } from "react";
import style from "@/style/auth.module.css"
import style2 from "@/style/setting.module.css"
import BottomComp from "../(container)/bottomComp";
import TopText from "../(container)/topText";
import { InputContainer } from "../(container)/InputContainer";
import { useRouter } from "next/navigation";
import { api } from "@/app/keepinglyClientApi";
import Image from "next/image";
import Link from "next/link"
export default function Verification({params}){
    let [count, setCount] = useState(60)
    let [link, setLink] = useState('')
    let router = useRouter()
    useEffect(()=>{
        api.post(`/api/v2/activate/account/${params.id}`).then((ele)=>{
            console.log(ele)
        })
    }, [count, router, params])
    return(
        <form style={{display: 'flex', alignItem: 'center'}} className={style.modular} onSubmit={(e)=>{
            e.preventDefault()
            router.push('/')
        }}>
            <Image className={style.margin} src={'/asset/icons/success.png'} alt='keepingly logo' width={80} height={80} />
            <h1 className={style.margin}>
                success!
            </h1>
            <p className={style.margin}>You are successfully registered</p>
            <Link href="/" className={style2.redFillBtn}>Log in</Link>
        </form>
    )
}