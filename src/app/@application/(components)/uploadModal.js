import InputApp from "./appInput"
import { DragAndDrop } from "./dragAndDrop"
import { ModalFooter } from "./modalFooter"
import { ModalHead } from "./modalHead"
import style from '@/style/video.module.css'
export let UploadModal=({currentPage, closeFunc, type})=>{
    return(
        <div className={style.modalUploadScreen}>
            <ModalHead text={`Upload ${currentPage}`} closeFunc={closeFunc}/>
                    <p className={style.modalInfoText2}>Select from the {currentPage} category or upload to a new category.</p>
                    <div className={style.modalForm}>
                        <InputApp label={'Document category'} inputType={'select'} placeholder={'Category name'} />
                        <InputApp label={'Enter a new category'} inputType={'text'} placeholder={'Enter a new category'} />
                        <div className={style.modalUploadContent}>
                            <DragAndDrop type={type}/>
                            <div className={style.modalCard}>
                                <div className={style.modalCardImg}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.15" d="M3.33337 14H12.6667V6H10C9.26366 6 8.66671 5.40305 8.66671 4.66667V2H3.33337V14Z" fill="#333333"/>
                                        <path d="M3.33337 2V1.5C3.05723 1.5 2.83337 1.72386 2.83337 2H3.33337ZM12.6667 14V14.5C12.9429 14.5 13.1667 14.2761 13.1667 14H12.6667ZM3.33337 14H2.83337C2.83337 14.2761 3.05723 14.5 3.33337 14.5V14ZM9.33337 2L9.68693 1.64645C9.59316 1.55268 9.46598 1.5 9.33337 1.5V2ZM12.6667 5.33333H13.1667C13.1667 5.20073 13.114 5.07355 13.0203 4.97978L12.6667 5.33333ZM5.33337 10.8333C5.05723 10.8333 4.83337 11.0572 4.83337 11.3333C4.83337 11.6095 5.05723 11.8333 5.33337 11.8333V10.8333ZM10.6667 11.8333C10.9429 11.8333 11.1667 11.6095 11.1667 11.3333C11.1667 11.0572 10.9429 10.8333 10.6667 10.8333V11.8333ZM5.33337 8.16667C5.05723 8.16667 4.83337 8.39052 4.83337 8.66667C4.83337 8.94281 5.05723 9.16667 5.33337 9.16667V8.16667ZM9.33337 9.16667C9.60952 9.16667 9.83337 8.94281 9.83337 8.66667C9.83337 8.39052 9.60952 8.16667 9.33337 8.16667V9.16667ZM12.6667 13.5H3.33337V14.5H12.6667V13.5ZM3.83337 14V2H2.83337V14H3.83337ZM3.33337 2.5H9.33337V1.5H3.33337V2.5ZM12.1667 5.33333V14H13.1667V5.33333H12.1667ZM8.97982 2.35355L12.3132 5.68689L13.0203 4.97978L9.68693 1.64645L8.97982 2.35355ZM8.16671 2V4.66667H9.16671V2H8.16671ZM10 6.5H12.6667V5.5H10V6.5ZM8.16671 4.66667C8.16671 5.67919 8.98752 6.5 10 6.5V5.5C9.5398 5.5 9.16671 5.1269 9.16671 4.66667H8.16671ZM5.33337 11.8333H10.6667V10.8333H5.33337V11.8333ZM5.33337 9.16667H9.33337V8.16667H5.33337V9.16667Z" fill="#333333"/>
                                    </svg>
                                </div>
                                <div className={style.modalCardText}>
                                    <p className={style.modalCardText1}>Documentname.jpg</p>
                                    <p className={style.modalCardText2}>99% complete</p>
                                </div>
                                <div className={style.modalCircle}>
                                    <div className={style.modalCircleInner}>
                                    </div>
                                </div>
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6667 5.33331L5.33337 10.6667M5.33339 5.33331L10.6667 10.6667" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={style.modalCard}>
                                <div className={style.modalCardImg}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.15" d="M3.33337 14H12.6667V6H10C9.26366 6 8.66671 5.40305 8.66671 4.66667V2H3.33337V14Z" fill="#333333"/>
                                        <path d="M3.33337 2V1.5C3.05723 1.5 2.83337 1.72386 2.83337 2H3.33337ZM12.6667 14V14.5C12.9429 14.5 13.1667 14.2761 13.1667 14H12.6667ZM3.33337 14H2.83337C2.83337 14.2761 3.05723 14.5 3.33337 14.5V14ZM9.33337 2L9.68693 1.64645C9.59316 1.55268 9.46598 1.5 9.33337 1.5V2ZM12.6667 5.33333H13.1667C13.1667 5.20073 13.114 5.07355 13.0203 4.97978L12.6667 5.33333ZM5.33337 10.8333C5.05723 10.8333 4.83337 11.0572 4.83337 11.3333C4.83337 11.6095 5.05723 11.8333 5.33337 11.8333V10.8333ZM10.6667 11.8333C10.9429 11.8333 11.1667 11.6095 11.1667 11.3333C11.1667 11.0572 10.9429 10.8333 10.6667 10.8333V11.8333ZM5.33337 8.16667C5.05723 8.16667 4.83337 8.39052 4.83337 8.66667C4.83337 8.94281 5.05723 9.16667 5.33337 9.16667V8.16667ZM9.33337 9.16667C9.60952 9.16667 9.83337 8.94281 9.83337 8.66667C9.83337 8.39052 9.60952 8.16667 9.33337 8.16667V9.16667ZM12.6667 13.5H3.33337V14.5H12.6667V13.5ZM3.83337 14V2H2.83337V14H3.83337ZM3.33337 2.5H9.33337V1.5H3.33337V2.5ZM12.1667 5.33333V14H13.1667V5.33333H12.1667ZM8.97982 2.35355L12.3132 5.68689L13.0203 4.97978L9.68693 1.64645L8.97982 2.35355ZM8.16671 2V4.66667H9.16671V2H8.16671ZM10 6.5H12.6667V5.5H10V6.5ZM8.16671 4.66667C8.16671 5.67919 8.98752 6.5 10 6.5V5.5C9.5398 5.5 9.16671 5.1269 9.16671 4.66667H8.16671ZM5.33337 11.8333H10.6667V10.8333H5.33337V11.8333ZM5.33337 9.16667H9.33337V8.16667H5.33337V9.16667Z" fill="#333333"/>
                                    </svg>
                                </div>
                                <div className={style.modalCardText}>
                                    <p className={style.modalCardText1}>Documentname.Doc</p>
                                    <p className={style.modalCardText2}>33.65kb</p>
                                </div>
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.3333 9.33333V12C13.3333 12.7364 12.7363 13.3333 12 13.3333H3.99996C3.26358 13.3333 2.66663 12.7364 2.66663 12V9.33333M7.99996 10L7.99996 2M7.99996 10L5.33329 7.33333M7.99996 10L10.6666 7.33333" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6667 5.33331L5.33337 10.6667M5.33339 5.33331L10.6667 10.6667" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalFooter btnText1={`Cancel`} btnText2={`Upload`} btnStyle1={style.footerBtn} btnStyle2={style.footerBtn + ' ' + style.footerBtnGray}/>
                    </div>
    )
}