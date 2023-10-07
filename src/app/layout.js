'use client'
import auth from '@/style/auth.module.css'
import style from '@/style/layout.module.css'
import '@/style/style.css'
import Nav from './@application/(components)/nav'
import { Nunito } from 'next/font/google'
import { UserContext, userContext } from './userContext'
import { useContext, useEffect, useState} from 'react'
 
const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
    title: 'Keepingly'
}
export default function Layout({children, authentication, application}){
    let [user, setUser] = useState(false)
    UserContext.setView = setUser
    useEffect(()=>{
        console.log('user 1')
        let db = indexedDB.open('keepinglyDB', 1)
        db.onupgradeneeded=()=>{
            let result = db.result
            result.createObjectStore('user', {keyPath: "mail"})
        }
        db.onsuccess=()=>{
          console.log('called')
            let result = db.result
            let user = result.transaction('user', 'readonly').objectStore('user')
            let loggedInUser = localStorage.getItem('mail') || sessionStorage.getItem('mail') || ''
            console.log(loggedInUser)
            let mail = user.get(loggedInUser)
            mail.onsuccess=()=>{
                if (mail.result){
                  setUser(true)       
                }
            }
        }
    }, [])
    return(
    <html lang="en"  style={{fontFamily: nunito.style.fontFamily}}>
        <body>
            <UserContext>
                {
                user ? <section className={style.section}>
                <Nav/>
                <main className={style.main}>
                    {application}
                </main>
            </section> : <section className={auth.section}>
                    <main>
                    {authentication}
                    </main>
                </section>}
            </UserContext>
        </body>
    </html>
    )
}