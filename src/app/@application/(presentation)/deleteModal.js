import style from '@/style/video.module.css'
import { ModalHead } from "./modalHead"
import { ModalFooter } from './modalFooter'

export let DeleteModal=({currentPage, closeFunc})=>{
    return(
        <div className={style.modal}>
            <ModalHead text={`Delete ${currentPage}`} closeFunc={closeFunc}/>
                    <p className={style.modalInfoText2}>
                        {currentPage}, <span className={style.bold}>Document name.jpg</span> will be permanently deleted. Are you sure you want to continue?
                    </p>
                    <ModalFooter btnText1={`No, cancel`} btnText2={`Yes, delete`} btnStyle1={style.footerBtn + ' ' + style.footerBtnRed} btnStyle2={style.footerBtn}/>
        </div>
    )
}