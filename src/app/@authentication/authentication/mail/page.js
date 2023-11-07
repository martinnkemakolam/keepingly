import Link from "next/link";
import style from "../../../../style/auth.module.css";
export default function page() {
  return (
    <div className={style.modular}>
      <div className={style.topText}>
        <h1 className={style.h1}>Check your email address</h1>
        <p className={style.p}>
          Follow the instructions sent to email address to reset your password.
          If you don’t see the email in your inbox check your spam or junk
          folder.
          <br />
          <br />
          Still no email?{" "}
          <Link href='./forgot' className={style.colRed}>
            Resend the link
          </Link>{" "}
          <br />
          <br />
          If you encounter any issues, please contact{" "}
          <span className={style.colRed}>support@keepingly.com</span>for further
          assistance.
        </p>
      </div>
    </div>
  );
}
