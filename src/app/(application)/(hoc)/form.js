'use client'
import InputApp from "../(components)/appInput";
import { useEffect, useRef, useState } from "react";
import style from '../../../style/properties.module.css'
import Image from "next/image";
import PopulatedData from "../(components)/populatedData";
import CheckBox from "../(components)/checkBox";
export default function FormProperties({ disable, file, arrOpt, func, handleInput, refference, isProperty, isEdit, values}) {
    let [imgSrc, setImgSrc] = useState('')
    let [pos, setPos] = useState(false)
    let handleUploadInput =(name, files)=>{
        let fs = new FileReader()
        fs.onloadend=({target: {result}})=>{
            setImgSrc(result)
            handleInput(name, result)
        }
        fs.readAsDataURL(files[0])
    }
    let value = values ? values : null
    useEffect(()=>{
        setImgSrc(file)
    }, [file])
    let mapFunc=(ele, id)=>{
        if (Array.isArray(ele)) {
            return(
                <>
                    <div className={style.flexdiv}>
                        {
                            ele.map(({name, label, opt, placeholder, type, length}, id)=>{
                                let data = value !== null? value[name] : ''
                                return <InputApp isDisable={disable} value={data}  input={handleInput} className={ `${style.inputs} ${length==="small" && style.inputLength1} ${length==="medium" && style.inputLength2}`} label={label} placeholder={placeholder} inputType={type} key={id} name={name} optionArray={opt}/>
                            })
                        }
                    </div>
                </>
            )
        }
        let name = ele.name
        let data = value !== null ? value[name] : ''
        return <InputApp isDisable={disable} value={data} input={handleInput} className={style.inputs} label={ele.label} placeholder={ele.placeholder} inputType={ele.type} key={id} name={ele.name} optionArray={ele.opt}/>
    }
    return (
        <>
            <form className={style.flex} onSubmit={(e)=>{
                    e.preventDefault()
                    func()
                }
            }>
                <input style={{display: 'none'}} required={ file ? false : true} onChange={({target: {name, files}})=> handleUploadInput(name, files)} type="file" name="file" accept="image/*" id="file"/>
                <button ref={refference} style={{display: 'none'}}></button>
                <div className={style.upload} style={{height: isProperty ? "530px" : "22rem", pointerEvents: disable ? "none" : 'initial'}}>
                    <Image className={style.img} src={imgSrc} alt="" width={306} height={306}/>
                    <div className={style.uploadDiv}>
                        {isProperty && <div>
                        <h1 className={style.uploadH1}>Property</h1>
                        <p className={style.uploadP}>
                            600x600px or larger recommended for property image.
                        </p></div>}
                        <label className={ disable ? style.userSelect + " " + style.label: style.label} htmlFor="file" >Upload image</label>
                        {isProperty && isEdit && <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <p>Set as primary residence</p>
                        <CheckBox setPos={setPos} pos={pos} disable={disable}/>
                    </div>}
                    </div>
                </div>
                <div className={style.infoSect}>
                    {
                        arrOpt.map((ele, id)=>{
                            if (ele.h1 === `Profile settings` || ele.h1 === 'Notification settings' || ele.h1 === 'Account settings') {
                                return(

                                    <div className={style.info} key={id}>
                                        <PopulatedData mode={ele.h1} />
                                    </div>
                                )
                            } else
                            return (
                                <>
                                    <div className={style.info} key={id}>
                                        <div>
                                            <h1>{ele.h1}</h1>
                                            <h2>{ele.p}</h2>
                                        </div>
                                        <div className={style.formInputs}>
                                            {
                                                ele.arr.map((ele, id)=>{
                                                    return mapFunc(ele, id)
                                                })
                                            }
                                        </div>
                                        {!isProperty && <button type="submit" className={style.button}>Save profile</button>}
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </form>
        </>
    )
}