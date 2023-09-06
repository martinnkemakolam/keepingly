import Link from "next/link";
import style from "../../../style/auth.module.css"
export default function BottomComp({func, buttonText, pText, linkText, linkHref}){
    return(
        <div className={style.bottomContent}>
            <button onClick={()=> func()} className={style.button}>{buttonText}</button>
            <p>{pText} <Link className={style.colRed} href={linkHref}>{linkText}</Link></p>
        </div>
    )
}