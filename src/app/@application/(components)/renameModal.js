import InputApp from "./appInput"
import { ModalFooter } from "./modalFooter"
import { ModalHead } from "./modalHead"
import style from '@/style/video.module.css'
export let RenameModal=({currentPage, closeFunc})=>{
    return(
        <div className={style.modal}>
            <ModalHead text={`Rename ${currentPage}`} closeFunc={closeFunc}/>
                    <InputApp label={'Document name'} value={'Document name1.jpg'} placeholder={'Rename this document'} inputType={'text'} />
                    <ModalFooter btnText1={`Cancel`} btnText2={`Rename`} btnStyle1={style.footerBtn} btnStyle2={style.footerBtn + ' ' + style.footerBtnGray}/>
                    </div>
    )
}