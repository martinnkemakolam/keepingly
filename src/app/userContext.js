'use client'
import { Cookie } from "next/font/google"
import { createContext, useState, useEffect } from "react"
export const userContext = createContext()
export let UserContext=({children})=>{
    let [user, setUser] = useState({})
    UserContext.user = user
    UserContext.setUser = setUser
    console.log(user)
    useEffect(()=>{
      // let db = indexedDB.open('keepinglyDB', 1)
      // db.onupgradeneeded=()=>{
      //     let result = db.result
      //     result.createObjectStore('user', {keyPath: "mail"})
      // }
      // db.onsuccess=()=>{
      //   console.log('called')
      //     let result = db.result
      //     let user = result.transaction('user', 'readonly').objectStore('user')
      //     let loggedInUser = localStorage.getItem('mail') || sessionStorage.getItem('mail') || ''
      //     console.log(loggedInUser)
      //     let mail = user.get(loggedInUser)
      //     mail.onsuccess=()=>{
      //         if (mail.result){
      //           setUser(mail.result)         
      //         }
      //     }
      // }
  }, [])
    return(
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}