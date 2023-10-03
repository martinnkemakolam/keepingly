import style from '@/style/video.module.css'
export let ModalFooter=({btnText1, btnText2, btnStyle1, btnStyle2})=>{
    return(
        <div className={style.footer}>
            <button className={btnStyle1}>
                {btnText1}
            </button>
            <button className={btnStyle2}>
                {btnText2}
            </button>
        </div>
    )
}