import style from '@/style/setting.module.css'
export let ClearBtn=({text, svg, reverse, btnFunc})=>{
    return (
        <button onClick={()=> btnFunc()} className={`${style.titleButton}  ${reverse && style.reverse}`}>
            {text}
            <div>
                {svg && svg}
            </div>
        </button>
    )
}