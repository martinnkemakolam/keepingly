import InputApp from "./appInput";
import style from '@/style/video.module.css'
export default function Overlay(){
    return(
        <div className={style.overlay}>
             <div className={style.modal}>
                <div className={style.modalHead}>
                    <p className={style.modalHeadText}>
                        Send documents
                    </p>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6663 9.33331L9.33301 18.6667M9.33302 9.33331L18.6664 18.6667" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={style.modalDiv}>
                    <div className={style.modalInfo}>
                        <p className={style.modalInfoText}>Documents to be sent</p>
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
                <div>
                    <button>
                        Cancel
                    </button>
                    <button>
                        Send document
                    </button>
                </div>
            </div>
        </div>
    )
}