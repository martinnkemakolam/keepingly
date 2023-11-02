import style from '@/style/setting.module.css'
export let ClearBtn=({text, svg, btnStyle, btnFunc})=>{
    //clearBtn
    //clearBtnReverse
    //redFillBtn
    //redFillBtnInv
    console.log(btnStyle)
    return (
        <button onClick={()=> btnFunc()} className={`${style[btnStyle]}`}>
            {text}
            {svg && <div>
                {svg}
            </div>}
        </button>
    )
}