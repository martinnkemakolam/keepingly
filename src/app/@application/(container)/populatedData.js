'use client'
import { useEffect, useState } from "react";
import Row from "../(presentation)/row";
import style from '@/style/setting.module.css'
import CheckBox from "../(presentation)/checkBox";
import { useRouter } from "next/navigation";
export default function PopulatedData({mode}) {
    let router = useRouter()
    let [pos1, setPos1] = useState(false)
    let [pos2, setPos2] = useState(false)
    let [pos3, setPos3] = useState(false)
    let [data, setData] = useState({})
    useEffect(()=>{
        let db = indexedDB.open('keepinglyDB', 1.0)
        db.onsuccess=()=>{
            let result = db.result
            let store = result.transaction('user', 'readonly').objectStore('user')
            let userData = store.get(0)
            userData.onsuccess=()=>{
                setData(userData.result)
            }
        }
    },[])
    return (
    <div className={style.form}>
        <div className={style.title}>
            <div className={style.titleRow}>
            <h1 className={style.titleH1}>{mode}</h1>
            {mode === "Profile settings" && <><svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11.6667 1" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <button type="button" className={style.titleButton} onClick={()=> router.push('./')}>Edit</button>
            </>}
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.6665 6.66666L7.99984 10L11.3332 6.66666" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        { mode === "Profile settings" &&
        <> 
        <div className={style.dataRow}>
            <Row title={'First name'} text={data?.firstName}/>
            <Row title={'Last name'} text={data?.lastName}/>
            <Row title={`Email address`} text={data?.emailAddress}/>
        </div>
        <div className={style.dataRow}>
            <Row title={'Phone number'} text={data?.phoneNumber}/>
            <Row title={'License'} text={data?.license}/>
            <Row title={`Issuing state`} text={data?.issuingState}/>
        </div>
        <div className={style?.dataRow}>
            <Row title={`Agency`} text={data?.agency}/>
            <Row title={`Agency address`} text={data?.agencyAddress1}/>
            <Row title={`City`} text={data?.city}/>
        </div>
        <div className={style?.dataRow}>
            <Row title={`State`} text={data?.state}/>
            <Row title={`Zip code`} text={data?.Zipcode}/>
        </div>
        </>}
        {
            mode === 'Notification settings' && <>
            <div className={style.dataRow}>
                <p className={style.dataText2}>Push app notification</p>
                <CheckBox pos={pos1} setPos={setPos1}/>
            </div>
            <div className={style.dataRow}>
                <p className={style.dataText2}>Push SMS notification</p>
                <CheckBox pos={pos2} setPos={setPos2}/>
            </div>
            <div className={style.dataRow}>
                <p className={style.dataText2}>Push app notification</p>
                <CheckBox pos={pos3} setPos={setPos3} />
            </div>
            </>
        }
        {
            mode === 'Account settings' && <>
            <div className={style.dataRow}>
                <p className={style.delete}>Push app notification</p>
                <svg className={style.marginLeft} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 17L15 12L10 7" stroke="#E20000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            </>
        }
    </div>)
}