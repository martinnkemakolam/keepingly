import style from '@/style/expense.module.css'
import { Count } from '../(presentation)/count'
import { ButtonDivider } from './buttonDivider'
export default function ExpenseTitle({title, text,showDivider, underTitle,dividerPos,buttonText1, showCount, buttonText2, svg1, svg2, showDropDown, btnStyle1, btnStyle2, btnFunc1, btnFunc2}){
    let arrowDownSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.66675 6.66669L8.00008 10L11.3334 6.66669" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    return(
        <div className={style.header}>
            <div className={`${style.title} ${dividerPos ? style.right : ''}`}>
                <p className={style.titleText}>{title} <br/> <p className={style.underTitle}>{underTitle}</p> </p>
                {showCount && <Count count={showCount}/>}
            </div>
            {showDivider && <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11.6667 1" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                }
            {
               (buttonText1 || buttonText2) && <ButtonDivider btnFunc1={btnFunc1} btnFunc2={btnFunc2} btnStyle1={btnStyle1} btnStyle2={btnStyle2} showDivider={showDivider} dividerPos={dividerPos} svg1={svg1 || false} svg2={svg2 || false} buttonText1={buttonText1} buttonText2={buttonText2}/>
            }
            {
                text && <p>{text}</p>
            }
            {showDropDown && arrowDownSvg}
        </div>
    )
}