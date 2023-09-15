import InputApp from "../(components)/appInput";
import { useEffect, useRef, useState } from "react";
import style from '../../../style/properties.module.css'
export default function FormProperties({setFormFiled}) {
    
    let [userFormData, setUserFormData] = useState({})
    let [imgSrc, setImgSrc] = useState('')
    let [modalView, setModalView] = useState(false)
    let formRef = useRef(null)
    let handleUploadInput =(name, files)=>{
        let fs = new FileReader()
        fs.onloadend=({target: {result}})=>{
            setImgSrc(result)
            handleInput(name, result)
        }
        fs.readAsDataURL(files[0])
    }
    let handleInput =(name, value)=>{
        setUserFormData(
            {
                ...userFormData,
                [name]: value
            }
        )
    }
    let div1 = [
        {
            name: 'firstName',
            label: 'First name',
            type:"text",
            placeholder: "Enter first name"
        },
        {
            name: 'lastName',
            label: 'Last name',
            type:"text",
            placeholder:"Enter last name"
        },
        {
            name: 'emailAddress',
            label:'Email address',
            type:"email",
            placeholder:"Enter email address"
        },
        {
            name: 'phoneNumber',
            label: 'Phone number',
            type: 'number',
            placeholder: 'Enter phone number'
        }
    ]
    let div2 = [
        {
            name: 'license',
            label: 'License',
            type: 'select',
            placeholder: 'Select license',
            opt: [
                'test1', 'test2', 'test3'
            ]
        },{
            name: 'issuingState',
            label: 'Issuing state',
            type: 'select',
            placeholder: 'Select state',
            opt: [
                'test1', 'test2', 'test3'
            ]
        }
    ]
    let div3 = [
        {
            name: 'agency',
            label: 'Agency',
            type: 'text',
            placeholder: 'Enter agency'
        },{
            name: 'agencyAddress1',
            label: 'Agency address (line 1)',
            type: 'text',
            placeholder: 'Enter address'
        },{
            name: 'agencyAddress2',
            label: 'Agency address (line 2)',
            type: 'text',
            placeholder: 'Enter address'
        }
    ]
    let div4 = [
        {
            name: 'city',
            label: 'City',
            type: 'text',
            placeholder: 'Enter city',
        },{
            name: 'state',
            label: 'State',
            type: 'select',
            placeholder: 'Select state',
            opt: [
                'test1', 'test2', 'test3'
            ]
        },{
            name: 'Zipcode',
            label: 'ZIP code',
            type: 'text',
            placeholder: 'Enter city',
        }
    ]
    return (
        <>
            <form className={style.flex} ref={formRef} onSubmit={(e)=>{
                e.preventDefault()
                console.log(formRef.current)
                setModalView(true)
            }}>
                <div className={style.upload}>
                    <img src={imgSrc} alt=""/>
                    <input onChange={({target: {name, files}})=> handleUploadInput(name, files)} type="file" name="file" accept="image/*" id="file"/>
                    <label className={style.label} htmlFor="file">Upload image</label>
                </div>
                <div className={style.info}>
                    <div>
                        <h1>Complete your profile</h1>
                        <h2>Fill in the required information</h2>
                    </div>
                    <div className={style.formInputs}>
                        {div1.map(({label, type, placeholder},id)=><InputApp input={handleInput} className={style.inputs} label={label} placeholder={placeholder} inputType={type} key={id}/> )}
                        <div className={ style.flexdiv}>
                            {div2.map(({label, type, placeholder, opt},id)=> <InputApp input={handleInput} className={style.inputs} label={label} placeholder={placeholder} optionArray={opt} inputType={type} key={id}/> )}
                        </div>
                        {div3.map(({label, type, placeholder},id)=> <InputApp input={handleInput} className={style.inputs} label={label} placeholder={placeholder} inputType={type} key={id}/> )}
                        <div className={ style.flexdiv}>
                            {div4.map(({label, type, placeholder, opt},id)=> <InputApp input={handleInput} className={style.inputs} label={label} placeholder={placeholder} optionArray={opt} inputType={type} key={id}/> )}
                        </div>
                    </div>
                    {/* check if the user has filed all inputs if yes make clickable */}
                    <button type="submit" className={style.button}>Save profile</button>
                </div>
            </form>
            {
                modalView &&
                <div className={style.modal}>
                <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="#F0D9E1"/>
                        <path d="M34 18L23 29M20 32L13.9999 26M7.02423 30C6.36093 28.1233 6 26.1038 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 33.9411 33.9411 42 24 42C19.7134 42 15.7768 40.5016 12.6853 38" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <p>Congratulations! Your profile has been successfully set up. You're all set to start adding properties on the Keepingly platform. Happy listing!</p>
                    <button className={style.button} onClick={()=>{
                        setModalView(false)
                        setFormFiled(true)
                    }}>Proceed to Properties</button>
                </div>
            </div>
            }
        </>
    )
}