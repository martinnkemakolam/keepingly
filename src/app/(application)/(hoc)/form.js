'use client'
import { useEffect, useState } from "react";
import style from '../../../style/properties.module.css'
import PopulatedData from "../(components)/populatedData";
import { FormPage } from "../(components)/formPage";
import { UploadImg } from "../(components)/uploadImg";
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
    useEffect(()=>{
        setImgSrc(file)
    }, [file])
    return (
        <>
            <form className={style.flex} onSubmit={(e)=>{
                    e.preventDefault()
                    func()
                }
            }>
                <input style={{display: 'none'}} required={ file ? false : true} onChange={({target: {name, files}})=> handleUploadInput(name, files)} type="file" name="file" accept="image/*" id="file"/>
                <button ref={refference} style={{display: 'none'}}></button>
                <UploadImg imgSrc={imgSrc} disable={disable} setPos={setPos} isProperty={isProperty} pos={pos}/>
                <div className={style.infoSect}>
                    {
                        arrOpt.map((ele, id)=>{
                            if (ele.h1 === `Profile settings` || ele.h1 === 'Notification settings' || ele.h1 === 'Account settings') {
                                return(
                                    <div className={style.info} key={id}>
                                        <PopulatedData mode={ele.h1}/>
                                    </div>
                                )
                            } else
                            return (
                                <FormPage values={values} showButton={!isProperty} btnText={ele.btnText} handleInput={handleInput} ele={ele}/>
                            )
                        })
                    }
                </div>
            </form>
        </>
    )
}