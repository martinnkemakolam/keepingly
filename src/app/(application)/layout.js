import style from '../../style/layout.module.css'
import '../../style/style.css'
import Nav from './(components)/nav'
import { Nunito } from 'next/font/google'
 
const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
    title: 'Keepingly'
}
export default function Layout({children}){
    
    return(
    <html lang="en"  style={{fontFamily: nunito.style.fontFamily}}>
        <body>
            <section className={style.section}>
                <Nav/>
                <main className={style.main}>
                    {children}
                </main>
            </section>
        </body>
    </html>
    )
}