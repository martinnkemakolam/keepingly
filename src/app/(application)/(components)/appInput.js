import { data } from "@/dummyData"
import style from "../../../style/properties.module.css"
export default function InputApp({ name,input, className,inputType, optionArray, placeholder, label}){
    return(
        <>
        { (inputType === 'text' || inputType === 'email' || inputType === 'number' || inputType === 'date' ) && 
        <div className={className}>
            <label>{label}*</label>
            <input required={true} minLength='2' name={name} onChange={({target:{name, value}})=> input(name, value)} type={inputType} placeholder={placeholder} min={new Date().toISOString().split('T')[0]} />
        </div>}
        { inputType === 'select' && 
        
        <div className={className}>
            <label>{label}*</label>
            <div className={style.sect}>
                <select required={true} name={name} onChange={({target: {name, value}})=> input(name, value)} defaultValue=''>
                    <option value='' disabled={true} selected={true} hidden={true}>{placeholder}</option>
                    {
                        optionArray.map((item, id)=>{
                            return <option value={item} key={id}>{item}</option>
                        })
                    }
                </select>
            </div>
        </div>}
        
        </>
    )
}