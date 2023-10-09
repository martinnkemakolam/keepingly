
import InputApp from "../(components)/appInput";
import style from '../../../style/properties.module.css'
export let FormPage =({showButton, btnText, ele, values, disable, handleInput})=>{
    let value = values ? values : null
    let mapFunc=(ele, id)=>{
        if (Array.isArray(ele)) {
            return(
                <>
                    <div className={style.flexdiv}>
                        {
                            ele.map(({name, label, opt, placeholder, type, length}, id)=>{
                                let data = value !== null? value[name] : ''
                                return <InputApp isDisable={disable} value={data}  input={handleInput} className={ `${length==="small" && style.inputLength1} ${length==="medium" && style.inputLength2}`} label={label} placeholder={placeholder} inputType={type} key={id} name={name} optionArray={opt}/>
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
    return(
        <div className={style.info}>
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
            {showButton && <button type="submit" className={style.button}>{btnText}</button>}
        </div>
    )
}