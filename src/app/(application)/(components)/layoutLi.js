import style from '../../../style/layout.module.css'
import Link from 'next/link'
export default function LayoutLi({icon, isActive,Text, linkHref, hide}) {
    return(
        <li className={ isActive ? style.layoutLi + ' ' + style.active : style.layoutLi }><Link className={isActive ? style.active : ''} href={linkHref}>{icon} {hide ? null : Text}</Link></li>
    )
}