import style from "../../../style/properties.module.css"
export default function InputApp({ input, className,inputType, optionArray, placeholder, label}){
    return(
        <>
        { (inputType === 'text' || inputType === 'email') && 
        <div className={className}>
            <label>{label}*</label>
            <input required={true} name={label} onChange={({target:{name, value}})=> input(name, value)} type={inputType} placeholder={placeholder}/>
        </div>}
        { inputType === 'select' && 
        
        <div className={className}>
            <label>{label}*</label>
            <div className={style.sect}>
                <select required={true} name={label} onChange={({target: {name, value}})=> input(name, value)} defaultValue=''>
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