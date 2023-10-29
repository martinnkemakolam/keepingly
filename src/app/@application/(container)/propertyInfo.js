'use client'
import { userContext } from "@/app/userContext"
import style from "@/style/properties.module.css"
import { useContext, useEffect, useState } from "react"
export default function PropertyInfo({h1Text, setId,buttonText, buttonFunc, arrProperties, isEdit, extraButtonText, extraButtonFunc, showSvg}) {
    let [showDrop, setDrop] = useState(false)
    return(
        <div className={style.flex2 + ' ' + style.alignCenter}>
        <h1 className={style.tableH1}>{h1Text} { arrProperties?.length > 0 && <span className={style.span}>{arrProperties?.length}</span>}</h1>
        {showSvg &&
        <div onClick={()=> setDrop(!showDrop)}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.66699 6.66663L8.00033 9.99996L11.3337 6.66663" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>}
        {
            showDrop && <div>
                {arrProperties.map((ele, id)=> <><p onClick={()=> setId(id)}>{ele?.address_one}, {ele?.city} {ele?.zipcode}</p></>)}
            </div>
        }
        {
            buttonText &&
            <button className={`${ isEdit ? style.label : style.button}` + ' ' + style.autoLeft} onClick={()=> {
                buttonFunc()
            }}>{buttonText}</button>
        }
        {
            extraButtonText && 
            <button className={style.label + ' ' + style.mobile} onClick={()=> {
                extraButtonFunc()
            }}>{extraButtonText}</button>
        }

        </div>
    )
}