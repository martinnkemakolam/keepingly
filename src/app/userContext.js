'use client'
import { createContext, useState, useEffect } from "react"
export const userContext = createContext()

export let UserContext=({children})=>{
    
    let [user, setUser] = useState({})
    UserContext.user = user
    UserContext.setUser = setUser
    let [tkn, setTkn] = useState()
    useEffect(()=>{
        setTkn(localStorage.getItem('staylogged') || user.access_token)
        sessionStorage.setItem('staylogged',localStorage.getItem('staylogged'))
        
    }, [user])
    return(
        <userContext.Provider value={{user, setUser, tkn}}>
            {children}
        </userContext.Provider>
    )
}