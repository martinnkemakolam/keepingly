import style from "@/style/auth.module.css"
export default function TopText({h1Text, pText}) {
    return(
        <div className={`${style.topText}`}>
                <h1 className={style.h1}>{h1Text}</h1>
                <p className={style.p}>
                    {pText}
                </p>
            </div>
    )
}