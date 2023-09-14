export default function InputApp({ className,inputType, optionArray, placeholder, label}){
    return(
        <>
        { (inputType === 'text' || inputType === 'email') && 
        <div className={className}>
            <label>{label}*</label>
            <input type={inputType} placeholder={placeholder}/>
        </div>}
        { inputType === 'select' && 
        <div className={className}>
            <label>{label}*</label>
            <select defaultValue=''>
                <option value='' disabled={true} selected={true} hidden={true}>{placeholder}</option>
                {
                    optionArray.map((item, id)=>{
                        return <option value={item} key={id}>{item}</option>
                    })
                }
            </select>
        </div>}
        </>
    )
}