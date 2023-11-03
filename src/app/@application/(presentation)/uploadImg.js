import style from '../../../style/properties.module.css'
import CheckBox from "./checkBox";
import Link from 'next/link'
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
                    {isEdit && <> <Link  href={`/Documents?propId=de345f-43h5hr-899rs`} className={style.emptyBtn} style={{justifySelf: 'flex-end'}}>
                        View document 
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3333 7.99992L4.66666 7.99992M11.3333 7.99992L8.66666 10.6666M11.3333 7.99992L8.66666 5.33325" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
            </Link></>}
                </div>
    )
}