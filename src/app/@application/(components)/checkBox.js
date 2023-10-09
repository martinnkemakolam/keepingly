import style from '../../../style/properties.module.css'
export default function CheckBox({pos, setPos, disable}) {
    return(
        <label onClick={()=> setPos(!pos)} style={{borderRadius: '1.5rem', padding: '0.25rem', marginLeft: disable === undefined ? "auto" : "initial"}} htmlFor="check" className={disable || !pos ? style.userSelect + " " + style.check : style.check}>
        <div className={style.circle + ' ' + `${ pos ? style.right : style.left}`}></div>
    </label>
    )
}