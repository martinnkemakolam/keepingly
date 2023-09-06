import style from '../../../../style/auth.module.css'
export default function page(){
    return(
            <div className={`${style.topText}`}>
                <h1 className={style.h1}>Check your email address</h1>
                <p className={style.p}>
                    We have sent a password reset link to your email address. Please check your inbox and follow the instructions in the email to proceed with resetting your password. <br/> <br/>
                    If you don't see the password reset email in your inbox, please check your spam or junk folder. If you encounter any issues, please contact <br/> <span className={`${style.colRed}`}>support@keepingly.com</span> for further assistance.
                </p>
            </div>
    )
}