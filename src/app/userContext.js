'use client'
import { createContext, useState } from "react"
export const userContext = createContext()
export let UserContext=({children})=>{
    let [user, setUser] = useState({})
    UserContext.user = user
    UserContext.setUser = setUser
    return(
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}