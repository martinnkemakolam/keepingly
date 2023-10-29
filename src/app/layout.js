'use client'
import auth from '@/style/auth.module.css'
import style from '@/style/layout.module.css'
import '@/style/style.css'
import Nav from './@application/(container)/nav'
import { Nunito } from 'next/font/google'
import { UserContext } from './userContext'
import { useContext, useEffect, useState} from 'react'
const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export default function Layout({children, authentication, application}){
    let [user, setUser] = useState()
    UserContext.setView = setUser
    console.log(user)
    useEffect(()=>{
        setUser(sessionStorage.getItem('kpuo') || localStorage.getItem('staylogged'))
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