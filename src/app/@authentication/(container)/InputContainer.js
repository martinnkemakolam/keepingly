import { useRef } from "react"
import { VerificationBlock } from "../presentation/verificationBlock"
import style from "@/style/auth.module.css"

export let InputContainer=()=>{
    return(
        <div className={style.verificationBlockHolder}>
            <VerificationBlock/>
            <VerificationBlock/>
            <VerificationBlock/>
            <VerificationBlock/>
            <VerificationBlock/>
        </div>
    )
}