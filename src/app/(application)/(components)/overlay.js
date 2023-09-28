import InputApp from "./appInput";
import style from '@/style/video.module.css'
export default function Overlay({overlay, currentPage,closeFunc}){
    return(
        <div className={style.overlay}>
             <div className={`${overlay === 'Upload' ? style.modalUploadScreen : ''} ${overlay === 'Send' ? style.modal : ''}`}>
                <div className={style.modalHead}>
                    <p className={style.modalHeadText}>
                        Send {currentPage}
                    </p>
                    <svg onClick={()=> closeFunc()} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6663 9.33331L9.33301 18.6667M9.33302 9.33331L18.6664 18.6667" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                {overlay === 'Send' && <><div className={style.modalDiv}>
                    <div className={style.modalInfo}>
                        <p className={style.modalInfoText}>{currentPage} to be sent</p>
                        <div>
                            <p className={style.modalInfoText2}>Property improvement/update information</p>
                            <p className={style.modalInfoText2}>Property information</p>
                            <p className={style.modalInfoText2}>Closing documents</p>
                            <p className={style.modalInfoText2}>Litigated related publicly listed information</p>
                            <p className={style.modalInfoText2}>Condominium document</p>
                        </div>
                    </div>
                        <form className={style.modalContent}>
                            <p className={style.modalContentText}>Fill in the required information</p>
                            <InputApp inputType={`text`} placeholder={`Separate multiple addresses with a comma`} label={`Email address(es)`} name={`mutliMail`} />
                            <InputApp inputType={`text`} placeholder={`Type in your message`} label={`Add a comment/description`} name={`comment`}/>
                        </form>
                </div>
                <div className={style.footer}>
                    <button className={style.footerBtn}>
                        Cancel
                    </button>
                    <button className={style.footerBtn + ' ' + style.footerBtnGray}>
                        Send {currentPage}
                    </button>
                </div>
                </>}
                {
                    overlay === "Delete" && <>
                    <p className={style.modalInfoText2}>
                        {currentPage}, <span className={style.bold}>Document name.jpg</span> will be permanently deleted. Are you sure you want to continue?
                    </p>
                    <div className={style.footer}>
                        <button className={style.footerBtn + ' ' + style.footerBtnRed}>No, cancel</button>
                        <button className={style.footerBtn}>Yes, delete</button>
                    </div>
                    </>
                }
                {
                    overlay === 'Rename' && <>
                    <InputApp label={'Document name'} value={'Document name1.jpg'} placeholder={'Rename this document'} inputType={'text'} />
                    <div className={style.footer}>
                        <button>Cancel</button>
                        <button>Rename</button>
                    </div>
                    </>
                }
                {
                    overlay === 'Upload' && <>
                    <p className={style.modalInfoText2}>Select from the {currentPage} category or upload to a new category.</p>
                    <div className={style.modalForm}>
                        <InputApp label={'Document category'} inputType={'select'} placeholder={'Category name'} />
                        <InputApp label={'Enter a new category'} inputType={'text'} placeholder={'Enter a new category'} />
                        <div className={style.modalUploadContent}>
                            <div className={style.modalUpload}>
                                <div className={style.icon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.15" d="M5 21H19V9H15C13.8954 9 13 8.10457 13 7V3H5V21Z" fill="#838383"/>
                                        <path d="M5 3V2.5C4.72386 2.5 4.5 2.72386 4.5 3H5ZM19 21V21.5C19.2761 21.5 19.5 21.2761 19.5 21H19ZM5 21H4.5C4.5 21.2761 4.72386 21.5 5 21.5V21ZM14 3L14.3536 2.64645C14.2598 2.55268 14.1326 2.5 14 2.5V3ZM19 8H19.5C19.5 7.86739 19.4473 7.74021 19.3536 7.64645L19 8ZM12.5 11C12.5 10.7239 12.2761 10.5 12 10.5C11.7239 10.5 11.5 10.7239 11.5 11H12.5ZM11.5 17C11.5 17.2761 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.2761 12.5 17H11.5ZM9 13.5C8.72386 13.5 8.5 13.7239 8.5 14C8.5 14.2761 8.72386 14.5 9 14.5V13.5ZM15 14.5C15.2761 14.5 15.5 14.2761 15.5 14C15.5 13.7239 15.2761 13.5 15 13.5V14.5ZM19 20.5H5V21.5H19V20.5ZM5.5 21V3H4.5V21H5.5ZM5 3.5H14V2.5H5V3.5ZM18.5 8V21H19.5V8H18.5ZM13.6464 3.35355L18.6464 8.35355L19.3536 7.64645L14.3536 2.64645L13.6464 3.35355ZM12.5 3V7H13.5V3H12.5ZM15 9.5H19V8.5H15V9.5ZM12.5 7C12.5 8.38071 13.6193 9.5 15 9.5V8.5C14.1716 8.5 13.5 7.82843 13.5 7H12.5ZM11.5 11V17H12.5V11H11.5ZM9 14.5H15V13.5H9V14.5Z" fill="#838383"/>
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 9V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V9C19.2091 9 21 10.7909 21 13C21 14.4806 20.1956 15.7733 19 16.4649M7 9C4.79086 9 3 10.7909 3 13C3 14.4806 3.8044 15.7733 5 16.4649M7 9C7.43285 9 7.84965 9.06875 8.24006 9.19594M12 11V21M12 11L16 15M12 11L8 15" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.15" d="M5 21H19V9H15C13.8954 9 13 8.10457 13 7V3H5V21Z" fill="#838383"/>
                                        <path d="M5 3V2.5C4.72386 2.5 4.5 2.72386 4.5 3H5ZM19 21V21.5C19.2761 21.5 19.5 21.2761 19.5 21H19ZM5 21H4.5C4.5 21.2761 4.72386 21.5 5 21.5V21ZM14 3L14.3536 2.64645C14.2598 2.55268 14.1326 2.5 14 2.5V3ZM19 8H19.5C19.5 7.86739 19.4473 7.74021 19.3536 7.64645L19 8ZM8 16.5C7.72386 16.5 7.5 16.7239 7.5 17C7.5 17.2761 7.72386 17.5 8 17.5V16.5ZM16 17.5C16.2761 17.5 16.5 17.2761 16.5 17C16.5 16.7239 16.2761 16.5 16 16.5V17.5ZM8 12.5C7.72386 12.5 7.5 12.7239 7.5 13C7.5 13.2761 7.72386 13.5 8 13.5V12.5ZM14 13.5C14.2761 13.5 14.5 13.2761 14.5 13C14.5 12.7239 14.2761 12.5 14 12.5V13.5ZM19 20.5H5V21.5H19V20.5ZM5.5 21V3H4.5V21H5.5ZM5 3.5H14V2.5H5V3.5ZM18.5 8V21H19.5V8H18.5ZM13.6464 3.35355L18.6464 8.35355L19.3536 7.64645L14.3536 2.64645L13.6464 3.35355ZM12.5 3V7H13.5V3H12.5ZM15 9.5H19V8.5H15V9.5ZM12.5 7C12.5 8.38071 13.6193 9.5 15 9.5V8.5C14.1716 8.5 13.5 7.82843 13.5 7H12.5ZM8 17.5H16V16.5H8V17.5ZM8 13.5H14V12.5H8V13.5Z" fill="#838383"/>
                                    </svg>
                                </div>
                                <div className={style.modalUploadText}>
                                    <p className={style.modalUploadText1}>Drag here or <span className={style.modalUploadTextBtn}>click</span> to upload document</p>
                                    <p className={style.modalUploadText2}>Maximum file size is 2MB.<br/>File must be in DOC, DOCX or PDF formats.</p>
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
                    <div className={style.footer}>
                        <button className={style.footerBtn}>Cancel</button>
                        <button className={style.footerBtn + ' ' + style.footerBtnGray}>Upload</button>
                    </div>
                    </>
                }
            </div>
        </div>
    )
}