'use server'

const { cookies } = require("next/headers")
let cookie = cookies()
export let setCookies=  (str,tkn)=>{
    cookie.set(str, tkn)
}