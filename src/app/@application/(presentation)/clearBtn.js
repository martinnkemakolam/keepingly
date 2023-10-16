import style from '@/style/setting.module.css'
export let ClearBtn=({text, svg, btnStyle, btnFunc})=>{
    //clearBtn
    //redFillBtn
    return (
        <button onClick={()=> btnFunc()} className={`${style[btnStyle]}`}>
            {text}
            <div>
                {svg && svg}
            </div>
        </button>
    )
}