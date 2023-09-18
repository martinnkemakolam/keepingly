'use client'
import style from "@/style/properties.module.css"
export default function PropertyInfo({h1Text, buttonText, buttonFunc, arrProperties}) {
    return(
        <div className={style.flex+ ' ' + style.alignCenter}>
        <h1 className={style.tableH1}>{h1Text} { arrProperties?.length > 0 && <span className={style.span}>{arrProperties?.length}</span>}</h1>
        {
            buttonText &&
            <button className={style.button + ' ' + style.autoLeft} onClick={()=> buttonFunc()}>{buttonText}</button>
        }
        </div>
    )
}