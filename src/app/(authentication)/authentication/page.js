'use client'
import style from "../../../style/auth.module.css"
import Link from "next/link";
import AuthButton from "../(component)/authButton";
import DivOr from "../(component)/divOr";
import Input from "../(component)/input";
import TopText from "../(component)/topText";
import BottomComp from "../(component)/bottomComp";

export default function SignIn (){
    return (
        <>
        <TopText h1Text={`Sign in to your account`} pText={`Easily maintain and manage your home with Keepingly.`}/>
        <AuthButton google={true} pText={`Sign in with Google`}/>
        <AuthButton google={false} pText={`Sign in with Apple`}/>
        <DivOr/>
        <Input changeFunc={null} password={false} inputText={`Email address`} errorMsg={`email not found`} errorState={false} />
        <Input changeFunc={null} password={true} inputText={`Password`} errorMsg={`incorrect password`} errorState={false} />
        <div className={style.checkBox}>
            <div className={style.label}>
                <input type="checkbox" id="remember"/>
                <label htmlFor="remember">Remember me</label>
            </div>
            <Link className={style.colRed} href={`/authentication/forgot`}>Forgot password?</Link>   
        </div>
        <BottomComp func={null} buttonText={`Sign in`} pText={`Don’t have an account yet?`} linkHref={`/authentication/signUp`} linkText={`Register`}/>
        </>
    )
}