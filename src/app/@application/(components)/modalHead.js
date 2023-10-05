import style from '@/style/video.module.css'
export let ModalHead=({text, closeFunc})=>{
    return(
        <div className={style.modalHead}>
            <p className={style.modalHeadText}>
                {text}
            </p>
            <svg onClick={()=> closeFunc()} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6663 9.33331L9.33301 18.6667M9.33302 9.33331L18.6664 18.6667" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}