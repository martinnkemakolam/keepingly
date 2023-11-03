import { DragAndDrop } from "../(presentation)/dragAndDrop"
import style from '@/style/properties.module.css'
export let FormUpload=({type, h1Text, pText})=>{
    return(
        <div className={style.info}>
            <div>
                <h1>{h1Text}</h1>
                <h2>{pText}</h2>
            </div>
            <DragAndDrop type={type}/>
        </div>
    )
}