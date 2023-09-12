'use client'
import style from '../../style/layout.module.css'
import '../../style/style.css'
import LayoutLi from './(components)/layoutLi'
import { useState } from 'react'
export default function Layout({children}){
    let [layoutState, setLayoutState] = useState('Properties')
    let arrayIcon = [
        {
            name: 'Overview',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00004 3.33359V2.33359H13.6667V7.00025H9.00004V6.00025M3.33337 9.00025H2.33337V13.6669H7.00004V9.00025H6.00004M2.33337 2.33359H7.00004V7.00025H2.33337V2.33359ZM9.00004 9.00025H13.6667V13.6669H9.00004V9.00025Z" stroke={ layoutState === 'Overview' ? '#A61D4A' : "#838383"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>        
        },{
            name: 'Properties',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M2.66663 6.66691L7.99996 2.00024L13.3333 6.66691L13.3333 13.3336H9.99996V10.6669C9.99996 10.1365 9.78925 9.62777 9.41418 9.2527C9.0391 8.87762 8.5304 8.66691 7.99996 8.66691C7.46953 8.66691 6.96082 8.87762 6.58575 9.2527C6.21068 9.62777 5.99996 10.1365 5.99996 10.6669V13.3336H2.66663L2.66663 6.66691Z" fill={ layoutState === 'Properties' ? '#A61D4A' : "#838383"}/>
            <path d="M2.66663 6.66691L7.99996 2.00024L13.3333 6.66691L13.3333 13.3336H9.99996V10.6669C9.99996 10.1365 9.78925 9.62777 9.41418 9.2527C9.0391 8.87762 8.5304 8.66691 7.99996 8.66691C7.46953 8.66691 6.96082 8.87762 6.58575 9.2527C6.21068 9.62777 5.99996 10.1365 5.99996 10.6669V13.3336H2.66663L2.66663 6.66691Z" stroke={ layoutState === 'Properties' ? '#A61D4A' : "#838383"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
                    
        },{
            name: 'Expenses',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M2.66667 4.66692C2.29848 4.66692 2 4.96539 2 5.33358V10.6669C2 11.0351 2.29848 11.3336 2.66667 11.3336H13.3333C13.7015 11.3336 14 11.0351 14 10.6669V5.33358C14 4.96539 13.7015 4.66692 13.3333 4.66692H2.66667ZM8 9.66692C8.92047 9.66692 9.66667 8.92072 9.66667 8.00025C9.66667 7.07977 8.92047 6.33358 8 6.33358C7.07953 6.33358 6.33333 7.07977 6.33333 8.00025C6.33333 8.92072 7.07953 9.66692 8 9.66692Z" fill={ layoutState === 'Expenses'? '#A61D4A' : "#838383"}/>
            <path d="M12 6.33358V9.66692M4 6.33358V9.66692M2.66667 11.3336H13.3333C13.7015 11.3336 14 11.0351 14 10.6669V5.33358C14 4.96539 13.7015 4.66692 13.3333 4.66692H2.66667C2.29848 4.66692 2 4.96539 2 5.33358V10.6669C2 11.0351 2.29848 11.3336 2.66667 11.3336ZM9.66667 8.00025C9.66667 8.92072 8.92047 9.66692 8 9.66692C7.07953 9.66692 6.33333 8.92072 6.33333 8.00025C6.33333 7.07977 7.07953 6.33358 8 6.33358C8.92047 6.33358 9.66667 7.07977 9.66667 8.00025Z" stroke={ layoutState === 'Expenses' ? '#A61D4A' : "#838383"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
                 
        },{
            name: 'KeepTrack',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M2.66663 6.66691C2.66663 4.45777 4.45749 2.66691 6.66663 2.66691H9.33329C11.5424 2.66691 13.3333 4.45777 13.3333 6.66691V9.33357C13.3333 11.5427 11.5424 13.3336 9.33329 13.3336H6.66663C4.45749 13.3336 2.66663 11.5427 2.66663 9.33357V6.66691Z" fill={ layoutState === 'KeepTrack' ? '#A61D4A' : "#838383"}/>
            <path d="M11.3333 6.00024L6.66661 10.6669L4.66659 8.66691M5.33329 13.3336H10.6666C12.1394 13.3336 13.3333 12.1397 13.3333 10.6669V5.33357C13.3333 3.86082 12.1394 2.66691 10.6666 2.66691H5.33329C3.86053 2.66691 2.66663 3.86082 2.66663 5.33357V10.6669C2.66663 12.1397 3.86053 13.3336 5.33329 13.3336Z" stroke={ layoutState === 'KeepTrack' ? '#A61D4A' : "#838383"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>                
        },{
            name: 'Documents',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M3.33337 14.0002H12.6667V6.00024H10C9.26366 6.00024 8.66671 5.40329 8.66671 4.66691V2.00024H3.33337V14.0002Z" fill={ layoutState === 'Documents' ? '#A61D4A' : "#838383"}/>
            <path d="M3.33337 2.00024V1.25024C2.91916 1.25024 2.58337 1.58603 2.58337 2.00024H3.33337ZM12.6667 14.0002V14.7502C13.0809 14.7502 13.4167 14.4145 13.4167 14.0002H12.6667ZM3.33337 14.0002H2.58337C2.58337 14.4145 2.91916 14.7502 3.33337 14.7502V14.0002ZM9.33337 2.00024L9.8637 1.46991C9.72305 1.32926 9.53229 1.25024 9.33337 1.25024V2.00024ZM12.6667 5.33358H13.4167C13.4167 5.13467 13.3377 4.9439 13.197 4.80325L12.6667 5.33358ZM5.33337 10.5836C4.91916 10.5836 4.58337 10.9194 4.58337 11.3336C4.58337 11.7478 4.91916 12.0836 5.33337 12.0836V10.5836ZM10.6667 12.0836C11.0809 12.0836 11.4167 11.7478 11.4167 11.3336C11.4167 10.9194 11.0809 10.5836 10.6667 10.5836V12.0836ZM5.33337 7.91691C4.91916 7.91691 4.58337 8.2527 4.58337 8.66691C4.58337 9.08112 4.91916 9.41691 5.33337 9.41691V7.91691ZM9.33337 9.41691C9.74759 9.41691 10.0834 9.08112 10.0834 8.66691C10.0834 8.2527 9.74759 7.91691 9.33337 7.91691V9.41691ZM12.6667 13.2502H3.33337V14.7502H12.6667V13.2502ZM4.08337 14.0002V2.00024H2.58337V14.0002H4.08337ZM3.33337 2.75024H9.33337V1.25024H3.33337V2.75024ZM11.9167 5.33358V14.0002H13.4167V5.33358H11.9167ZM8.80304 2.53057L12.1364 5.86391L13.197 4.80325L9.8637 1.46991L8.80304 2.53057ZM7.91671 2.00024V4.66691H9.41671V2.00024H7.91671ZM10 6.75024H12.6667V5.25024H10V6.75024ZM7.91671 4.66691C7.91671 5.8175 8.84945 6.75024 10 6.75024V5.25024C9.67788 5.25024 9.41671 4.98908 9.41671 4.66691H7.91671ZM5.33337 12.0836H10.6667V10.5836H5.33337V12.0836ZM5.33337 9.41691H9.33337V7.91691H5.33337V9.41691Z" fill={ layoutState === 'Documents' ? '#A61D4A' : "#838383"}/>
            </svg>            
        },{
            name: 'Realtor',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M3.33337 6.66691L8.00004 2.00024L12.6667 6.66691L12.6667 13.3336H3.33338L3.33337 6.66691Z" fill={ layoutState === 'Realtor' ? '#A61D4A' : "#838383"}/>
            <path d="M3.33337 6.66691L8.00004 2.00024L12.6667 6.66691L12.6667 13.3336H3.33338L3.33337 6.66691Z" stroke={ layoutState === 'Realtor' ? '#A61D4A' : "#838383"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>                          
        },{
            name: 'Chatbot',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M13.3333 2.66691H2.66663V10.6669H4.66663V14.0002L7.99996 10.6669H13.3333V2.66691Z" fill={ layoutState === 'Chatbot' ? '#A61D4A' : "#838383"}/>
            <path d="M5.33329 5.33358H10.6666M5.33329 8.00025H8.66663M2.66663 2.66691H13.3333V10.6669H7.99996L4.66663 14.0002V10.6669H2.66663V2.66691Z" stroke={ layoutState === 'Chatbot' ? '#A61D4A' : "#838383"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>            
        },{
            name: 'Renovations',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.15">
            <path d="M14 8.00024C14 8.73662 13.403 9.33357 12.6667 9.33357C11.9303 9.33357 11.3333 8.73662 11.3333 8.00024C11.3333 7.26386 11.9303 6.66691 12.6667 6.66691C13.403 6.66691 14 7.26386 14 8.00024Z" fill={ layoutState === 'Chatbot' ? '#A61D4A' : "#838383"}/>
            <path d="M9.33333 12.0002C9.33333 12.7366 8.73638 13.3336 8 13.3336C7.26362 13.3336 6.66667 12.7366 6.66667 12.0002C6.66667 11.2639 7.26362 10.6669 8 10.6669C8.73638 10.6669 9.33333 11.2639 9.33333 12.0002Z" fill={ layoutState === 'Chatbot' ? '#A61D4A' : "#838383"}/>
            <path d="M4.66667 4.00024C4.66667 4.73662 4.06971 5.33357 3.33333 5.33357C2.59695 5.33357 2 4.73662 2 4.00024C2 3.26386 2.59695 2.66691 3.33333 2.66691C4.06971 2.66691 4.66667 3.26386 4.66667 4.00024Z" fill={ layoutState === 'Chatbot' ? '#A61D4A' : "#838383"}/>
            </g>
            <path d="M12.6667 9.33357C13.403 9.33357 14 8.73662 14 8.00024C14 7.26386 13.403 6.66691 12.6667 6.66691M12.6667 9.33357C11.9303 9.33357 11.3333 8.73662 11.3333 8.00024C11.3333 7.26386 11.9303 6.66691 12.6667 6.66691M12.6667 9.33357V13.3336M12.6667 6.66691V2.66691M8 10.6669C7.26362 10.6669 6.66667 11.2639 6.66667 12.0002C6.66667 12.7366 7.26362 13.3336 8 13.3336C8.73638 13.3336 9.33333 12.7366 9.33333 12.0002C9.33333 11.2639 8.73638 10.6669 8 10.6669ZM8 10.6669V2.66691M3.33333 5.33357C4.06971 5.33357 4.66667 4.73662 4.66667 4.00024C4.66667 3.26386 4.06971 2.66691 3.33333 2.66691C2.59695 2.66691 2 3.26386 2 4.00024C2 4.73662 2.59695 5.33357 3.33333 5.33357ZM3.33333 5.33357V13.3336" stroke={ layoutState === 'Chatbot' ? '#A61D4A' : "#838383"} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        },{
            name: 'Settings',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M7.33333 2.00024C6.96514 2.00024 6.66667 2.29872 6.66667 2.66691V3.04609C6.66667 3.3313 6.47525 3.57908 6.21184 3.68844C5.94833 3.79784 5.64152 3.75615 5.43977 3.5544L5.17156 3.28619C4.91121 3.02584 4.4891 3.02584 4.22875 3.28619L3.28594 4.22899C3.02559 4.48934 3.02559 4.91145 3.28594 5.1718L3.55415 5.44002C3.7559 5.64177 3.7976 5.94858 3.6882 6.21209C3.57883 6.4755 3.33105 6.66691 3.04584 6.66691L2.66667 6.66691C2.29848 6.66691 2 6.96539 2 7.33358V8.66691C2 9.0351 2.29848 9.33358 2.66667 9.33358H3.04586C3.33106 9.33358 3.57883 9.52499 3.68819 9.78839C3.79759 10.0519 3.75589 10.3587 3.55415 10.5604L3.28593 10.8287C3.02558 11.089 3.02558 11.5111 3.28593 11.7715L4.22874 12.7143C4.48909 12.9746 4.9112 12.9746 5.17155 12.7143L5.43973 12.4461C5.64149 12.2443 5.94831 12.2026 6.21183 12.312C6.47524 12.4214 6.66667 12.6692 6.66667 12.9544V13.3336C6.66667 13.7018 6.96514 14.0002 7.33333 14.0002H8.66667C9.03486 14.0002 9.33333 13.7018 9.33333 13.3336V12.9544C9.33333 12.6692 9.52475 12.4214 9.78816 12.312C10.0517 12.2026 10.3585 12.2443 10.5602 12.4461L10.8284 12.7143C11.0888 12.9746 11.5109 12.9746 11.7712 12.7143L12.714 11.7715C12.9744 11.5111 12.9744 11.089 12.714 10.8287L12.4458 10.5605C12.2441 10.3587 12.2024 10.0519 12.3118 9.7884C12.4212 9.52499 12.6689 9.33358 12.9542 9.33358H13.3333C13.7015 9.33358 14 9.0351 14 8.66691V7.33358C14 6.96539 13.7015 6.66691 13.3333 6.66691L12.9542 6.66691C12.669 6.66691 12.4212 6.47549 12.3118 6.21207C12.2024 5.94856 12.2441 5.64173 12.4458 5.43998L12.714 5.1718C12.9744 4.91145 12.9744 4.48934 12.714 4.22899L11.7712 3.28618C11.5109 3.02583 11.0887 3.02583 10.8284 3.28618L10.5602 3.5544C10.3584 3.75614 10.0516 3.79783 9.78814 3.68843C9.52474 3.57908 9.33333 3.3313 9.33333 3.0461V2.66691C9.33333 2.29872 9.03486 2.00024 8.66667 2.00024H7.33333ZM8 9.33358C8.73638 9.33358 9.33333 8.73662 9.33333 8.00024C9.33333 7.26386 8.73638 6.66691 8 6.66691C7.26362 6.66691 6.66667 7.26386 6.66667 8.00024C6.66667 8.73662 7.26362 9.33358 8 9.33358Z" fill={ layoutState === 'Settings' ? '#A61D4A' : "#838383"}/>
            <path d="M6.66667 2.66691C6.66667 2.29872 6.96514 2.00024 7.33333 2.00024H8.66667C9.03486 2.00024 9.33333 2.29872 9.33333 2.66691V3.0461C9.33333 3.3313 9.52474 3.57908 9.78814 3.68843C10.0516 3.79783 10.3584 3.75614 10.5602 3.5544L10.8284 3.28618C11.0888 3.02583 11.5109 3.02583 11.7712 3.28618L12.714 4.22899C12.9744 4.48934 12.9744 4.91145 12.714 5.1718L12.4458 5.43998C12.2441 5.64173 12.2024 5.94856 12.3118 6.21207C12.4212 6.47549 12.669 6.66691 12.9542 6.66691L13.3333 6.66691C13.7015 6.66691 14 6.96539 14 7.33358V8.66691C14 9.0351 13.7015 9.33358 13.3333 9.33358H12.9542C12.669 9.33358 12.4212 9.52499 12.3118 9.7884C12.2024 10.0519 12.2441 10.3587 12.4458 10.5605L12.714 10.8287C12.9744 11.089 12.9744 11.5111 12.714 11.7715L11.7712 12.7143C11.5109 12.9746 11.0888 12.9746 10.8284 12.7143L10.5602 12.4461C10.3585 12.2443 10.0517 12.2026 9.78816 12.312C9.52475 12.4214 9.33333 12.6692 9.33333 12.9544V13.3336C9.33333 13.7018 9.03486 14.0002 8.66667 14.0002H7.33333C6.96514 14.0002 6.66667 13.7018 6.66667 13.3336V12.9544C6.66667 12.6692 6.47524 12.4214 6.21183 12.312C5.94831 12.2026 5.64149 12.2443 5.43973 12.4461L5.17155 12.7143C4.9112 12.9746 4.48909 12.9746 4.22874 12.7143L3.28593 11.7715C3.02558 11.5111 3.02558 11.089 3.28593 10.8287L3.55415 10.5604C3.75589 10.3587 3.79759 10.0519 3.68819 9.78839C3.57883 9.52499 3.33106 9.33358 3.04586 9.33358H2.66667C2.29848 9.33358 2 9.0351 2 8.66691V7.33358C2 6.96539 2.29848 6.66691 2.66667 6.66691L3.04584 6.66691C3.33105 6.66691 3.57883 6.4755 3.6882 6.21209C3.7976 5.94858 3.7559 5.64177 3.55415 5.44002L3.28594 5.1718C3.02559 4.91145 3.02559 4.48934 3.28594 4.22899L4.22875 3.28619C4.4891 3.02584 4.91121 3.02584 5.17156 3.28619L5.43977 3.5544C5.64152 3.75615 5.94833 3.79784 6.21184 3.68844C6.47525 3.57908 6.66667 3.3313 6.66667 3.04609V2.66691Z" stroke={ layoutState === 'Settings' ? '#A61D4A' : "#838383"} strokeWidth="1.5"/>
            <path d="M9.33333 8.00024C9.33333 8.73662 8.73638 9.33358 8 9.33358C7.26362 9.33358 6.66667 8.73662 6.66667 8.00024C6.66667 7.26386 7.26362 6.66691 8 6.66691C8.73638 6.66691 9.33333 7.26386 9.33333 8.00024Z" stroke={ layoutState === 'Settings' ? '#A61D4A' : "#838383"} strokeWidth="1.5"/>
            </svg>            
        }
    ]
    let liMap = arrayIcon.map(({name, svg}, id)=>{
        return(
            <LayoutLi isActive={name === layoutState} Text={name} func={setLayoutState} icon={svg} linkHref={name === 'Overview' ? '/' : `/${name}`} key={id}/>
        )
    })
    return(
    <html lang="en">
        <body>
            <section className={style.section}>
                <nav className={style.sidebar}>
                    <img alt='keepingly logo' src='/asset/logo/logo.png' width='116.25' height='40'/>
                    <ul>
                    {liMap}
                    </ul>
                </nav>
                <main className={style.main}>
                    {children}
                </main>
            </section>
        </body>
    </html>
    )
}