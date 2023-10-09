import Link from "next/link"
import style from "../../../../style/auth.module.css"
import TopText from "../../container/topText"
export default function success() {
    return(
        <div className={style.modular}>
        <TopText h1Text={`Password reset successful`} pText={`You can now log in to Keepingly using your new password.`}/>
        <Link href="/authentication" className={style.button}>Log in</Link>
        </div>
    )
}