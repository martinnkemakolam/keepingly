import style from '../../../style/layout.module.css'
import Link from 'next/link'
export default function LayoutLi({icon, isActive,Text, linkHref}) {
    return(
        <li className={ isActive ? style.layoutLi + ' ' + style.active : style.layoutLi }>{icon} <Link className={isActive ? style.active : ''} href={linkHref}>{Text}</Link></li>
    )
}