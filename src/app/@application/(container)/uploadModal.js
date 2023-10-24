import { useState } from "react"
import InputApp from "../(presentation)/appInput"
import { DragAndDrop } from "../(presentation)/dragAndDrop"
import {UploadCard} from "../(presentation)/uploadCard"
import { ModalFooter } from "../(presentation)/modalFooter"
import { ModalHead } from "../(presentation)/modalHead"
import style from '@/style/video.module.css'
export let UploadModal=({currentPage, closeFunc,type})=>{
    let [file, setFile] = useState([])
    return(
        <div className={style.modalUploadScreen}>
            <ModalHead text={`Upload ${currentPage}`} closeFunc={closeFunc}/>
                    <p className={style.modalInfoText2}>Select from the {currentPage} category or upload to a new category.</p>
                    <div className={style.modalForm}>
                        <InputApp label={'Document category'} inputType={'select'} placeholder={'Category name'} />
                        <InputApp label={'Enter a new category'} inputType={'text'} placeholder={'Enter a new category'} />
                        <div className={style.modalUploadContent}>
                            <DragAndDrop addToUpload={(arr)=> setFile([...file, ...arr])} type={type}/>
                            {
                                file.map((ele)=>{
                                    return <>
                                    <UploadCard name={ele.name} size={ele.size}/>
                                    </>
                                })
                            }
                        </div>
                    </div>
                    <ModalFooter btnText1={`Cancel`}  btnText2={`Upload`} btnStyle1={style.footerBtn} btnStyle2={style.footerBtn + ' ' + style.footerBtnGray}/>
                    </div>
    )
}