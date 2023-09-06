import style from "../../../style/auth.module.css"
export default function Input ({password, inputText, errorState, errorMsg, changeFunc}){
    return(
        <div className={style.inputDiv}>
            <div className={style.error}>
                <p className={ errorState ? style.active : ''}>{errorMsg}</p>
                <input className={errorState ? style.colRed : ''} onChange={({target: {value}})=> changeFunc(value)} placeholder={inputText} type={ password ? 'password' : "email"}/>
            </div>
            { password ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.50942 3.53012C6.97767 3.40483 7.47493 3.33333 8.00004 3.33333C12.2425 3.33333 14.6667 8 14.6667 8C14.6667 8 14.1141 9.06385 13.0747 10.1757M2.89945 5.85215C1.87684 6.95382 1.33337 8 1.33337 8C1.33337 8 3.75762 12.6667 8.00004 12.6667C8.53476 12.6667 9.04059 12.5925 9.51632 12.463M7.66671 9.97235C6.94392 9.85109 6.35259 9.34215 6.11384 8.66667M8.33337 6.02765C9.17088 6.16816 9.83188 6.82917 9.97239 7.66667M2.00004 2L14 14" stroke={ errorState ? '#A61D4A' : '#333333'} strokeWidth="1.5" strokeLinecap="round"  strokeLinejoin="round"/>
                </svg>
                : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.15" d="M14 12V4.00003C14 3.81594 13.9254 3.64927 13.8047 3.52863L13.6667 3.6667L8.94281 8.39055C8.42211 8.91125 7.57789 8.91125 7.05719 8.39055L2.33333 3.6667L2.19526 3.52863C2.07462 3.64927 2 3.81594 2 4.00003V12C2 12.3682 2.29848 12.6667 2.66667 12.6667H13.3333C13.7015 12.6667 14 12.3682 14 12Z" fill="#333333"/>
                <path d="M2.33333 3.66665L7.05719 8.3905C7.57789 8.9112 8.42211 8.9112 8.94281 8.3905L13.6667 3.66665M2.66667 12.6666H13.3333C13.7015 12.6666 14 12.3682 14 12V3.99998C14 3.63179 13.7015 3.33331 13.3333 3.33331H2.66667C2.29848 3.33331 2 3.63179 2 3.99998V12C2 12.3682 2.29848 12.6666 2.66667 12.6666Z" stroke={ errorState ? '#A61D4A' : '#333333'} strokeWidth="1.5" strokeLinecap="round"  strokeLinejoin="round"/>
                </svg>
            }
        </div>
    )
}