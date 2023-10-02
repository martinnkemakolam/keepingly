import style from '@/style/expense.module.css'
import { Count } from './count'
import { ButtonDivider } from './buttonDivider'
export default function ExpenseTitle({title, dividerPos,buttonText1, buttonText2, svg1, svg2, showDropDown}){
    let arrowDownSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.66675 6.66669L8.00008 10L11.3334 6.66669" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    return(
        <div className={style.header}>
            <div className={`${style.title} ${dividerPos ? style.right : ''}`}>
                <p className={style.titleText}>{title}</p>
                <Count count={20}/>
            </div>
            {
               buttonText1 || buttonText2 && <ButtonDivider dividerPos={dividerPos} svg1={svg1 || false} svg2={svg2 || false} buttonText1={buttonText1} buttonText2={buttonText2}/>
            }
            {showDropDown && arrowDownSvg}
        </div>
    )
}