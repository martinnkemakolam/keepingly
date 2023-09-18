import style from '../../style/layout.module.css'
import '../../style/style.css'
import Nav from './(components)/nav'
export const metadata = {
    title: 'Keepingly'
}
export default function Layout({children}){
    
    return(
    <html lang="en">
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