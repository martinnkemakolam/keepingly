import '../../style/style.css'
export const metadata = {
    title: 'Keepingly'
}
export default function layout({children}){
    return(
    <html lang="en">
        <body>
            <nav>layout</nav>
            {children}
        </body>
    </html>
    )
}