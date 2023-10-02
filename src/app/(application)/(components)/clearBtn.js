import style from '@/style/setting.module.css'
export let ClearBtn=({text, svg, reverse})=>{
    return (
        <button className={`${style.titleButton}  ${reverse && style.reverse}`}>
            {text}1
            <div>
                {svg && svg}
            </div>
        </button>
    )
}