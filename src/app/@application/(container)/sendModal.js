import style from '@/style/video.module.css'
import InputApp from "../(presentation)/appInput"
import { ModalFooter } from "../(presentation)/modalFooter"
import { ModalHead } from '../(presentation)/modalHead'

export let SendModal =({currentPage, select, closeFunc})=>{
    return(
        <div className={style.modal}>
            <ModalHead text={`Send ${currentPage}`} closeFunc={closeFunc}/>
        <div className={style.modalDiv}>
                    <div className={style.modalInfo}>
                        <p className={style.modalInfoText}>{currentPage} to be sent</p>
                        <div>
                            {
                                select.map((ele)=> <><p className={style.modalInfoText2}>{ele}</p></>)
                            }
                        </div>
                    </div>
                        <form className={style.modalContent}>
                            <p className={style.modalContentText}>Fill in the required information</p>
                            <InputApp inputType={`text`} placeholder={`Separate multiple addresses with a comma`} label={`Email address(es)`} name={`mutliMail`} />
                            <InputApp inputType={`text`} placeholder={`Type in your message`} label={`Add a comment/description`} name={`comment`}/>
                        </form>
                </div>
                <ModalFooter btnText1={`Cancel`} btnText2={`Send`} btnStyle1={`${style.footerBtn}`} btnStyle2={`${style.footerBtn} ${style.footerBtnGray}`}/>
        </div>
    )
}