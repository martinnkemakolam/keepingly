import style from '@/style/video.module.css'
import InputApp from "./appInput"
import { DragAndDrop } from "./dragAndDrop"
import { ModalFooter } from "./modalFooter"
import { ModalHead } from "./modalHead"
import Tick from "./tick"

export let KeepTrackModal=({closeFunc})=>{
    return(
        <div className={style.modalUploadScreen}>
            <ModalHead text={`Upload documents`} closeFunc={closeFunc}/>
            <div>
                <p>Checklist item</p>
                <p>Test and inspect smoke and carbon monoxide detectors</p>
            </div>
            <InputApp inputType={`select`} label={`File destination`} placeholder={`Select fie destination`}/>
            <DragAndDrop type={`document`} />
            <div>
                <Tick float={false} />
                <p>Complete maintenance after upload</p>
            </div>
            <ModalFooter btnText1={`Cancel`} btnText2={`Upload`} btnStyle1={style.footerBtn} btnStyle2={`${style.footerBtn} ${style.footerBtnRed}`}/>
        </div>
    )
}