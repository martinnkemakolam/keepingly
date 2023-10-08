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