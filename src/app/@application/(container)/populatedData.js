'use client'
import { useEffect, useState } from "react";
import Row from "../(presentation)/row";
import style from '@/style/setting.module.css'
import CheckBox from "../(presentation)/checkBox";
import { useRouter } from "next/navigation";
import { api } from "@/app/keepinglyClientApi";
export default function PopulatedData({mode}) {
    let router = useRouter()
    let [pos1, setPos1] = useState(false)
    let [pos2, setPos2] = useState(false)
    let [pos3, setPos3] = useState(false)
    let [data, setData] = useState({})
    useEffect(()=>{
        (async ()=>{
            let tkn = sessionStorage.getItem('kpuo')
            let apiValue = await api.get('/api/v2/profile/', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tkn}`
                }
            })
            setData(apiValue.data[0])
        })()
    },[])
    return (
    <div className={style.form}>
        <div className={style.title}>
            <div className={style.titleRow}>
            <h1 className={style.titleH1}>{mode}</h1>
            {mode === "Profile settings" && <><svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11.6667 1" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <button type="button" className={style.clearBtn} onClick={()=> router.push('./Setting/completeProfie')}>Edit</button>
            </>}
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.6665 6.66666L7.99984 10L11.3332 6.66666" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        { mode === "Profile settings" &&
        <> 
        <div className={style.dataRow}>
            <Row title={'First name'} text={data?.first_name}/>
            <Row title={'Last name'} text={data?.last_name}/>
            <Row title={`Email address`} text={data?.user?.email}/>
        </div>
        <div className={style.dataRow}>
            <Row title={'License'} text={data?.license_number}/>
            <Row title={`Issuing state`} text={data?.license_state}/>
        </div>
        <div className={style?.dataRow}>
            <Row title={`Agency`} text={data?.agency_name}/>
            <Row title={`Agency address`} text={data?.agency_address}/>
            <Row title={`City`} text={data?.city}/>
        </div>
        <div className={style?.dataRow}>
            <Row title={`Website`} text={data?.website}/>
            <Row title={`State`} text={data?.state}/>
            <Row title={`Zip code`} text={data?.zipcode}/>
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
            <div className={style.dataRow} style={{cursor: 'pointer'}} onClick={()=>{
            document.cookie = ''
            location.reload()
            document.cookie = ''
            sessionStorage.clear()
            }}>
                <p className={style.delete}>Log out</p>
                <svg className={style.marginLeft} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 17L15 12L10 7" stroke="#E20000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            </>
        }
    </div>)
}