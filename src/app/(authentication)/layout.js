import '../../style/style.css'
import style from '../../style/auth.module.css'
export default function layout({children}) {
    return(
        <html lang="en">
        <body>
        <section className={style.section}>
            <div className={style.modular}>
            {children}
            </div>
        </section>
        </body>
    </html>
        )
}