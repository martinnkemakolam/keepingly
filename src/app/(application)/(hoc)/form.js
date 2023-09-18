'use client'
import InputApp from "../(components)/appInput";
import { useState } from "react";
import style from '../../../style/properties.module.css'
export default function FormProperties({arrOpt, func, handleInput}) {
    let [imgSrc, setImgSrc] = useState('')
    let handleUploadInput =(name, files)=>{
        let fs = new FileReader()
        fs.onloadend=({target: {result}})=>{
            setImgSrc(result)
            handleInput(name, result)
        }
        fs.readAsDataURL(files[0])
    }
    
    let mapFunc=(ele, id)=>{
        if (Array.isArray(ele)) {
            return(
                <>
                    <div className={style.flexdiv}>
                        {
                            ele.map(({name, label, opt, placeholder, type, length}, id)=>{
                                return <InputApp input={handleInput} className={ `${style.inputs} ${length==="small" && style.inputLength1} ${length==="medium" && style.inputLength2}`} label={label} placeholder={placeholder} inputType={type} key={id} name={name} optionArray={opt}/>
                            })
                        }
                    </div>
                </>
            )
        }
        return <InputApp input={handleInput} className={style.inputs} label={ele.label} placeholder={ele.placeholder} inputType={ele.type} key={id} name={ele.name} optionArray={ele.opt}/>
    }
    return (
        <>
            <form className={style.flex} onSubmit={(e)=>{
                    e.preventDefault()
                    func()
                }
            }>
                <div className={style.upload}>
                    <img src={imgSrc} alt="" width={306} height={306}/>
                    <input required='true' onChange={({target: {name, files}})=> handleUploadInput(name, files)} type="file" name="file" accept="image/*" id="file"/>
                    <label className={style.label} htmlFor="file">Upload image</label>
                </div>
                <div className={style.infoSect}>
                    {
                        arrOpt.map((ele, id)=>{
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
                                        {arrOpt.length===1 && <button type="submit" className={style.button}>Save profile</button>}
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