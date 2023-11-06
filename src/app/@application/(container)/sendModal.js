import style from '@/style/video.module.css'
import InputApp from "../(presentation)/appInput"
import { ModalFooter } from "../(presentation)/modalFooter"
import { ModalHead } from '../(presentation)/modalHead'
import { api } from '../../keepinglyClientApi'
import { useState } from 'react'

export let SendModal =({currentPage, select, propId,closeFunc})=>{
    let [mail, setMail] = useState('')
    let btnFunc2= async()=>{
        let data = {
            homeowner_email: mail
        }
        let tkn = sessionStorage.getItem('kpuo')
        let apiData = await api.post(`/api/v2/send/property/${propId}/`, data, {
            headers: {
                Authorization: `Bearer ${tkn}`,
                'Content-Type': 'application/json'
            }
        })
        console.log(apiData)
    }
    let btnFunc1=()=>closeFunc()
    let input=(name, val)=>{
        setMail(val)
    }
    return(
        <div className={style.modal}>
            <ModalHead text={`Invite homeowner`} closeFunc={closeFunc}/>
        <div className={style.modalDiv}>
                    {/* <div className={style.modalInfo}>
                        <p className={style.modalInfoText}>{currentPage} to be sent</p>
                        <div>
                            {
                                select.map((ele)=> <><p className={style.modalInfoText2}>{ele}</p></>)
                            }
                        </div>
                    </div> */}
                        <form className={style.modalContent}>
                            <p className={style.modalContentText}>Fill in the required information</p>
                            <InputApp inputType={`text`} placeholder={`Homeowner email address`} label={`Email address`} input={input} name={`homeowner_email`} />
                            {/* <InputApp inputType={`text`} placeholder={`Type in your message`} label={`Add a comment/description`} name={`comment`}/> */}
                        </form>
                </div>
                <ModalFooter btnOneFunc={btnFunc1} btnTwoFunc={btnFunc2} btnText1={`Cancel`} btnText2={`Send`} btnStyle1={`${style.footerBtn}`} btnStyle2={`${style.footerBtn} ${style.footerBtnGray}`}/>
        </div>
    )
}