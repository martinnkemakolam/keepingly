import style from '@/style/setting.module.css'
export default function Row({title, text}) {
    return(
        <div className={style.dataTexts}>
            <p className={style.dataTexts1}>{title}</p>
            <p className={style.dataTexts2}>{text}</p>
        </div>
    )
}