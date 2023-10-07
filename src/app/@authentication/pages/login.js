'use client'
import style from "@/style/auth.module.css"
import Link from "next/link";
import TopText from "../container/topText";
import AuthButton from "../presentation/authButton";
import DivOr from "../presentation/divOr";
import Input from "../presentation/input";
import BottomComp from "../container/bottomComp";
import { handleInput } from "@/app/reusedFunctions";

export default function SignIn (){
    let [loginDetail, setLoginDetails] = useState({})
    let [mailError, setMailError] = useState(false)
    let [remember, setRemember] = useState(false)
    let [passwordError, setPasswordError] = useState(false)
    let submit=()=>{
        let db = indexedDB.open('keepinglyDB', 1)
        db.onsuccess=()=>{
            let result = db.result
            let store = result.transaction('user', "readwrite").objectStore('user')
            let user = store.get(loginDetail.mail)
            user.onsuccess=()=>{
                if (user.result) {
                   if(user.result.password === loginDetail.password ){
                        contextObj.setUser(user.result)
                        sessionStorage.setItem('mail', `${loginDetail.mail}`)
                        remember && localStorage.setItem('mail', `${loginDetail.mail}`)
                        UserContext.setView(true)
                    }else {
                        setPasswordError(true) //call wrong password
                    }
                }else{
                    // call no user
                    setMailError(true)
                }
            }
        }
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
        <Input name={`mail`} changeFunc={(name, value)=> handleInput( name, value, loginDetail, setLoginDetails)} password={false} inputText={`Email address`} errorMsg={`email not found`} errorState={mailError} />
        <Input name={`password`} changeFunc={(name, value)=> handleInput( name, value, loginDetail, setLoginDetails)} password={true} inputText={`Password`} errorMsg={`incorrect password`} errorState={passwordError} />
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