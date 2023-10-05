import style from '@/style/expense.module.css'
import { ClearBtn } from "./clearBtn"

export let ButtonDivider=({svg1, buttonText1, svg2, buttonText2, dividerPos, btnFunc1, btnFunc2})=>{
    return (
        <div className={`${style.divider} ${dividerPos ? style.left : ''}`}>
                { buttonText1 && <ClearBtn text={buttonText1} svg={svg1} btnFunc={btnFunc1}/>}
                { buttonText2 && <> <svg width="2" height="9" viewBox="0 0 2 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 8C0.5 8.27614 0.723857 8.5 1 8.5C1.27614 8.5 1.5 8.27614 1.5 8L0.5 8ZM0.5 -2.18557e-08L0.5 8L1.5 8L1.5 2.18557e-08L0.5 -2.18557e-08Z" fill="#D2D2D2"/>
                </svg>
                 <ClearBtn text={buttonText2} svg={svg2} btnFunc={btnFunc2}/> </>}
            </div>
    )
}