'use client'
import AuthButton from "../../(component)/authButton";
import BottomComp from "../../(component)/bottomComp";
import DivOr from "../../(component)/divOr";
import Input from "../../(component)/input";
import TopText from "../../(component)/topText";
import style from "../../../../style/auth.module.css"
export default function register(params) {
    return(
        <>
        <TopText h1Text={`Register to get started`} pText={`Easily maintain and manage your home with Keepingly.`} />
        <div className={style.form}>
            <AuthButton google={true} pText={`Register with Google`}/>
            <AuthButton google={false} pText={`Register with Apple`}/>
            <DivOr/>
            <Input password={false} inputText={`Email address`} errorMsg={'not sure yet'} errorState={false} changeFunc={null}/>
            <Input password={true} inputText={`Password`} errorMsg={'not sure yet'} errorState={false} changeFunc={null}/>
            <Input password={true} inputText={`Confirm password`} errorMsg={'not sure yet'} errorState={false} changeFunc={null}/>
            <p className={style.signupText}>
            By signing up, you agree that you are a US resident, 18 years or older, and you accept Keepingly’s <span className={style.colRed}>Terms and Conditions</span> and <span className={style.colRed}>Privacy Policy.</span>
            </p>
        </div>
        <BottomComp func={()=> console.log('called')} buttonText={`Register`} pText={`Already have an account?`} linkHref={`/authentication`} linkText={`Sign in`} />
        </>
    )
}