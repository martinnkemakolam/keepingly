import Link from "next/link";
import style from "../../../style/auth.module.css"
export default function BottomComp({func, buttonText, pText, linkText, linkHref, col}){
    return(
        <div className={style.bottomContent}>
            <button onClick={()=> func()} className={style.button} style={{opacity: col ? "0.6" : "1"}}>{buttonText}</button>
            <p>{pText} <Link className={style.colRed} href={linkHref}>{linkText}</Link></p>
        </div>
    )
}