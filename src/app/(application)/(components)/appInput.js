import style from "../../../style/properties.module.css"
export default function InputApp({ isDisable, value, name,input, className,inputType, optionArray, placeholder, label}){
    return(
        <>
        { (inputType === 'text' || inputType === 'email' || inputType === 'number' || inputType === 'date' ) && 
        <div className={ isDisable ? style.userSelect + " " + className : className} style={{pointerEvents: isDisable ? 'none' : 'initial'}}>
            <label className={isDisable ? style.userSelect : ''}>{label}*</label>
            <input className={isDisable ? style.userSelect : ''} defaultValue={value ? value : ''} required={true} minLength='2' name={name} onChange={({target:{name, value}})=> input(name, value)} type={inputType} placeholder={placeholder} min={new Date().toISOString().split('T')[0]} />
        </div>}
        { inputType === 'select' && 
        
        <div className={isDisable ? style.userSelect : className} style={{pointerEvents: isDisable ? 'none' : 'initial'}}>
            <label className={isDisable ? style.userSelect : ''}>{label}*</label>
            <div className={isDisable ? style.userSelect + " " + style.sect : style.sect}>
                <select required={true} name={name} onChange={({target: {name, value}})=> input(name, value)}>
                    <option defaultValue={ value ? value : placeholder} disabled={true} selected={true} hidden={true}>{value ? value : placeholder}</option>
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