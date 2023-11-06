import style from '@/style/video.module.css'
export let ModalFooter=({btnText1, btnText2, btnStyle1, btnOneFunc, btnTwoFunc,btnStyle2})=>{
    return(
        <div className={style.footer}>
            <button className={btnStyle1} onClick={btnOneFunc}>
                {btnText1}
            </button>
            <button className={btnStyle2} onClick={btnTwoFunc}>
                {btnText2}
            </button>
        </div>
    )
}