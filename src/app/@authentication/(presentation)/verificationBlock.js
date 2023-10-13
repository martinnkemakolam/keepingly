import style from "@/style/auth.module.css"
export let VerificationBlock =({ref, ref2, logic})=>{
    return(
        <input className={style.verificationBlock} type="number" maxLength={1} />
    )
}