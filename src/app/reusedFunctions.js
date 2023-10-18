import { useState } from "react"

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
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.mail) || passwordConfirm.confirm !== user.password || !(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@#&!$%^*+=?|~:;/"'<>{}()[\],.]).{8,}/.test(user.password))
}