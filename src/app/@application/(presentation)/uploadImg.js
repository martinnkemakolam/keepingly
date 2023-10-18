import style from '../../../style/properties.module.css'
import CheckBox from "./checkBox";
import Image from "next/image";
export let UploadImg =({pos, setPos, disable, isProperty, imgSrc, isEdit})=>{
    return(
        <div className={style.upload} style={{height: isProperty ? "530px" : "fit-content", pointerEvents: disable ? "none" : 'initial'}}>
                    <Image className={style.img} src={imgSrc} alt="" width={306} height={306}/>
                    <div className={style.uploadDiv}>
                        {(isProperty || isEdit ) && <div>
                        <h1 className={style.uploadH1}>Property</h1>
                        <p className={style.uploadP}>
                            600x600px or larger recommended for property image.
                        </p></div>}
                        <label className={ disable ? style.userSelect + " " + style.label: style.label} htmlFor="file" >Upload image</label>
                        {(isProperty || isEdit ) && <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <p>Set as primary residence</p>
                        <CheckBox setPos={setPos} pos={pos} disable={disable}/>
                    </div>}
                    </div>
                </div>
    )
}