import style from '../../../style/layout.module.css'
import Link from 'next/link'
export default function LayoutLi({icon, canClick,isActive,Text, linkHref, hide}) {
    return(
        <li style={{pointerEvents: canClick ? 'initial' :'none'}} className={ isActive ? style.layoutLi + ' ' + style.active : style.layoutLi }><Link className={isActive ? style.active : ''} href={linkHref}>{icon} {hide ? null : Text}</Link></li>
    )
}