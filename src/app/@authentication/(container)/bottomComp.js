import Link from "next/link";
import style from "../../../style/auth.module.css"
export default function BottomComp({func, buttonText, pText, linkText, linkHref, col, linkHref2, linkText2}){
    return(
        <div className={style.bottomContent}>
            <button onClick={()=> func()} className={style.button} style={{opacity: col ? "0.6" : "1"}}>{buttonText}</button>
            <p className={style.block}>{pText} <Link className={style.colRed} href={linkHref}>{linkText}</Link> {linkHref2 && <><Link className={style.colRed} href={linkHref2}>{linkText2}</Link></>}</p>
        </div>
    )
}