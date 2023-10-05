import Link from "next/link"
import style from "../../../../style/auth.module.css"
import TopText from "../../(component)/topText"
export default function success() {
    return(
        <>
        <TopText h1Text={`Password reset successful`} pText={`
                    Your password has been successfully reset.
                    You can now log in to Keepingly using your new password.`}/>
        <Link href="/authentication" className={style.button}>Sign in</Link>
        </>
    )
}