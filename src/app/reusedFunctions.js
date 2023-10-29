'use client'
import { useState } from "react"

export let api = process.env.api

export let handleInput =(name, value, hook, setHook)=>{
    setHook(
        {
            ...hook,
            [name]: value
        }
    )
}
export let VisibleChnage=()=>{
    let [first, setFirst] = useState(false)
    let [second, setSecond] = useState(false)
    return [first, setFirst, second, setSecond]
}
export let ErrorHook =()=>{
    let [err, setErr] = useState(false)
    let [errMsg, setErrMsg] = useState(``)
    let change=(arg)=>{
        setErrMsg(arg)
        setErr(true)
    }
    return [err, errMsg, change]
}
export function callMailErr (alreadyUsed, user, errSet) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.mail)) {
        errSet(`Please enter a valid email address`)
        return   
    }
    if (alreadyUsed){
        errSet('Email already exists')
    }
}
export function callPassErr(user, passwordConfirm, setErr, conSetErr) {
    if (passwordConfirm.confirm !== user.password) {
        setErr(`Password doesn't match`)
    } else if (!(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@#&!$%^*+=?|~:;/"'<>{}()[\],.]).{8,}/.test(user.password))) {
        conSetErr(`Password doesn't fit pattern stated bellow`)
    }
}

export let errorExist =(user, passwordConfirm)=>{
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user?.mail) || passwordConfirm?.confirm !== user?.password || !(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@#&!$%^*+=?|~:;/"'<>{}()[\],.]).{8,}/.test(user?.password))
}

export let FilesFunc =(data)=>{
    let [select, setSelect] = useState([])
    let selectDoc = (arg)=>{
        let id2 = select.find((ele, id)=> ele === arg)
        if (id2) {
            setSelect(select.filter((e, id)=> e !== arg))
            return
        }
        setSelect([...select, arg])
    }
    let addAll =()=>{
        if (data.length === select.length) {
            setSelect([])
            return
        }
        let arr = data.map((ele)=> ele.name)
        setSelect([...arr])
    }
    return [select, selectDoc, addAll]
}

export let ShowOverlayFunc =(arg)=>{
    let [showOverLay, setShowOverlay]=useState({value: '' , type: '' ,bol: false})
    let send=()=>{
        setShowOverlay({value: arg, type: 'Send', bol: true})
    }
    let add=()=>{
        setShowOverlay({value: arg, type: 'Upload',bol: true})
    }
    let close=()=>{
        setShowOverlay({value:'', type:'', bol: false})
    }
    return [showOverLay, send, add, close]
}