'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import style from '@/style/layout.module.css'
import LayoutLi from '@/app/(application)/(components)/layoutLi'
import { useEffect, useState } from 'react'
import Image from 'next/image'
export default function Nav() {
    let currentParam = useSelectedLayoutSegment()
    let [hideNav, setHideNav] = useState(false)
    let [canClick, setCanClick] = useState(false)
    let arrayIcon = [
        {
            name: 'Overview',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00004 3.33359V2.33359H13.6667V7.00025H9.00004V6.00025M3.33337 9.00025H2.33337V13.6669H7.00004V9.00025H6.00004M2.33337 2.33359H7.00004V7.00025H2.33337V2.33359ZM9.00004 9.00025H13.6667V13.6669H9.00004V9.00025Z" stroke={ currentParam === "Overview" ? '#A61D4A' : "#838383"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>        
        },{
            name: 'Properties',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M2.66663 6.66691L7.99996 2.00024L13.3333 6.66691L13.3333 13.3336H9.99996V10.6669C9.99996 10.1365 9.78925 9.62777 9.41418 9.2527C9.0391 8.87762 8.5304 8.66691 7.99996 8.66691C7.46953 8.66691 6.96082 8.87762 6.58575 9.2527C6.21068 9.62777 5.99996 10.1365 5.99996 10.6669V13.3336H2.66663L2.66663 6.66691Z" fill={ currentParam === 'Properties' ? '#A61D4A' : "#838383"}/>
            <path d="M2.66663 6.66691L7.99996 2.00024L13.3333 6.66691L13.3333 13.3336H9.99996V10.6669C9.99996 10.1365 9.78925 9.62777 9.41418 9.2527C9.0391 8.87762 8.5304 8.66691 7.99996 8.66691C7.46953 8.66691 6.96082 8.87762 6.58575 9.2527C6.21068 9.62777 5.99996 10.1365 5.99996 10.6669V13.3336H2.66663L2.66663 6.66691Z" stroke={ currentParam === 'Properties' ? '#A61D4A' : "#838383"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
                    
        },{
            name: 'Documents',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M3.33337 14.0002H12.6667V6.00024H10C9.26366 6.00024 8.66671 5.40329 8.66671 4.66691V2.00024H3.33337V14.0002Z" fill={ currentParam === 'Documents' ? '#A61D4A' : "#838383"}/>
            <path d="M3.33337 2.00024V1.25024C2.91916 1.25024 2.58337 1.58603 2.58337 2.00024H3.33337ZM12.6667 14.0002V14.7502C13.0809 14.7502 13.4167 14.4145 13.4167 14.0002H12.6667ZM3.33337 14.0002H2.58337C2.58337 14.4145 2.91916 14.7502 3.33337 14.7502V14.0002ZM9.33337 2.00024L9.8637 1.46991C9.72305 1.32926 9.53229 1.25024 9.33337 1.25024V2.00024ZM12.6667 5.33358H13.4167C13.4167 5.13467 13.3377 4.9439 13.197 4.80325L12.6667 5.33358ZM5.33337 10.5836C4.91916 10.5836 4.58337 10.9194 4.58337 11.3336C4.58337 11.7478 4.91916 12.0836 5.33337 12.0836V10.5836ZM10.6667 12.0836C11.0809 12.0836 11.4167 11.7478 11.4167 11.3336C11.4167 10.9194 11.0809 10.5836 10.6667 10.5836V12.0836ZM5.33337 7.91691C4.91916 7.91691 4.58337 8.2527 4.58337 8.66691C4.58337 9.08112 4.91916 9.41691 5.33337 9.41691V7.91691ZM9.33337 9.41691C9.74759 9.41691 10.0834 9.08112 10.0834 8.66691C10.0834 8.2527 9.74759 7.91691 9.33337 7.91691V9.41691ZM12.6667 13.2502H3.33337V14.7502H12.6667V13.2502ZM4.08337 14.0002V2.00024H2.58337V14.0002H4.08337ZM3.33337 2.75024H9.33337V1.25024H3.33337V2.75024ZM11.9167 5.33358V14.0002H13.4167V5.33358H11.9167ZM8.80304 2.53057L12.1364 5.86391L13.197 4.80325L9.8637 1.46991L8.80304 2.53057ZM7.91671 2.00024V4.66691H9.41671V2.00024H7.91671ZM10 6.75024H12.6667V5.25024H10V6.75024ZM7.91671 4.66691C7.91671 5.8175 8.84945 6.75024 10 6.75024V5.25024C9.67788 5.25024 9.41671 4.98908 9.41671 4.66691H7.91671ZM5.33337 12.0836H10.6667V10.5836H5.33337V12.0836ZM5.33337 9.41691H9.33337V7.91691H5.33337V9.41691Z" fill={ currentParam === 'Documents' ? '#A61D4A' : "#838383"}/>
            </svg>
        },{
            name: 'Photos',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M2.66663 3.33366C2.66663 2.96547 2.9651 2.66699 3.33329 2.66699H12.6666C13.0348 2.66699 13.3333 2.96547 13.3333 3.33366V12.667C13.3333 13.0352 13.0348 13.3337 12.6666 13.3337H3.33329C2.9651 13.3337 2.66663 13.0352 2.66663 12.667V3.33366Z" fill={ currentParam === 'Photos' ? '#A61D4A' : "#838383"}/>
            <path d="M2.66663 12.0003L5.05715 9.6098C5.57785 9.0891 6.42207 9.0891 6.94277 9.6098L7.05715 9.72418C7.57785 10.2449 8.42207 10.2449 8.94277 9.72418L10.3905 8.27647C10.9112 7.75577 11.7554 7.75577 12.2761 8.27647L13.3333 9.33366M3.33329 13.3337H12.6666C13.0348 13.3337 13.3333 13.0352 13.3333 12.667V3.33366C13.3333 2.96547 13.0348 2.66699 12.6666 2.66699H3.33329C2.9651 2.66699 2.66663 2.96547 2.66663 3.33366V12.667C2.66663 13.0352 2.9651 13.3337 3.33329 13.3337ZM7.12729 5.89766C7.12729 6.57699 6.57596 7.12833 5.89663 7.12833C5.21796 7.12833 4.66663 6.57699 4.66663 5.89766C4.66663 5.21833 5.21796 4.66699 5.89663 4.66699C6.57596 4.66699 7.12729 5.21833 7.12729 5.89766Z" stroke={ currentParam === 'Photos' ? '#A61D4A' : "#838383"} stroke-width="1.5" stroke-linejoin="round"/>
            </svg>                      
        },{
            name: 'Videos',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M2 4.33366C2 3.96547 2.29848 3.66699 2.66667 3.66699H10C10.3682 3.66699 10.6667 3.96547 10.6667 4.33366V11.667C10.6667 12.0352 10.3682 12.3337 10 12.3337H2.66667C2.29848 12.3337 2 12.0352 2 11.667V4.33366Z" fill={ currentParam === 'Videos' ? '#A61D4A' : "#838383"}/>
            <path d="M10.6667 6.00033L14 4.66699V11.3337L10.6667 10.0003M2.66667 12.3337H10C10.3682 12.3337 10.6667 12.0352 10.6667 11.667V4.33366C10.6667 3.96547 10.3682 3.66699 10 3.66699H2.66667C2.29848 3.66699 2 3.96547 2 4.33366V11.667C2 12.0352 2.29848 12.3337 2.66667 12.3337Z" stroke={ currentParam === 'Videos' ? '#A61D4A' : "#838383"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                     
        },{
            name: "Appraiser's Edge",
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M8.66663 7.00033C8.66663 8.28899 9.71129 9.33366 11 9.33366L13.3333 11.667V7.00033C13.3333 5.71166 12.2886 4.66699 11 4.66699C9.71129 4.66699 8.66663 5.71166 8.66663 7.00033Z" fill={ currentParam === "Appraiser's Edge" ? '#A61D4A' : "#838383"}/>
            <path d="M2 7.00033C2 8.28899 3.04467 9.33366 4.33333 9.33366L6.66667 11.667V7.00033C6.66667 5.71166 5.622 4.66699 4.33333 4.66699C3.04467 4.66699 2 5.71166 2 7.00033Z" stroke={ currentParam === "Appraiser's Edge" ? '#A61D4A' : "#838383"} stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M8.66667 7.00033C8.66667 8.28899 9.71134 9.33366 11 9.33366L13.3333 11.667V7.00033C13.3333 5.71166 12.2887 4.66699 11 4.66699C9.71134 4.66699 8.66667 5.71166 8.66667 7.00033Z" stroke={ currentParam === "Appraiser's Edge" ? '#A61D4A' : "#838383"} stroke-width="1.5" stroke-linejoin="round"/>
            </svg>                                   
        },{
            name: "Expenses",
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M2.66667 4.66687C2.29848 4.66687 2 4.96535 2 5.33354V10.6669C2 11.0351 2.29848 11.3335 2.66667 11.3335H13.3333C13.7015 11.3335 14 11.0351 14 10.6669V5.33354C14 4.96535 13.7015 4.66687 13.3333 4.66687H2.66667ZM8 9.66687C8.92047 9.66687 9.66667 8.92068 9.66667 8.0002C9.66667 7.07973 8.92047 6.33354 8 6.33354C7.07953 6.33354 6.33333 7.07973 6.33333 8.0002C6.33333 8.92068 7.07953 9.66687 8 9.66687Z" fill={ currentParam === 'Expenses' ? '#A61D4A' : "#838383"}/>
            <path d="M12 6.33354V9.66687M4 6.33354V9.66687M2.66667 11.3335H13.3333C13.7015 11.3335 14 11.0351 14 10.6669V5.33354C14 4.96535 13.7015 4.66687 13.3333 4.66687H2.66667C2.29848 4.66687 2 4.96535 2 5.33354V10.6669C2 11.0351 2.29848 11.3335 2.66667 11.3335ZM9.66667 8.0002C9.66667 8.92068 8.92047 9.66687 8 9.66687C7.07953 9.66687 6.33333 8.92068 6.33333 8.0002C6.33333 7.07973 7.07953 6.33354 8 6.33354C8.92047 6.33354 9.66667 7.07973 9.66667 8.0002Z" stroke={ currentParam === 'Expenses' ? '#A61D4A' : "#838383"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>            
        },{
            name: 'Preferred Vendors',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M12.6667 13.3336V6.00024H3.33337V13.3336H12.6667Z" fill={ currentParam === 'Preferred Vendors' ? '#A61D4A' : "#838383"}/>
            <path d="M12.6666 6.00033V13.3337H3.33329V6.00033M12.6666 6.00033H3.33329M12.6666 6.00033C13.0348 6.00033 13.3333 5.70185 13.3333 5.33366V3.33366C13.3333 2.96547 13.0348 2.66699 12.6666 2.66699H3.33329C2.9651 2.66699 2.66663 2.96547 2.66663 3.33366V5.33366C2.66663 5.70185 2.9651 6.00033 3.33329 6.00033M6.66663 8.66699H9.33329" stroke={ currentParam === 'Preferred Vendors' ? '#A61D4A' : "#838383"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>            
        },{
            name: 'Chatbot',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M13.3333 2.66699H2.66663V10.667H4.66663V14.0003L7.99996 10.667H13.3333V2.66699Z" fill={ currentParam === 'Chatbot' ? '#A61D4A' : "#838383"}/>
            <path d="M5.33329 5.33366H10.6666M5.33329 8.00033H8.66663M2.66663 2.66699H13.3333V10.667H7.99996L4.66663 14.0003V10.667H2.66663V2.66699Z" stroke={ currentParam === 'Chatbot' ? '#A61D4A' : "#838383"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
        },{
            name: 'Renovation',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.15">
            <path d="M14 8.00024C14 8.73662 13.403 9.33358 12.6667 9.33358C11.9303 9.33358 11.3333 8.73662 11.3333 8.00024C11.3333 7.26386 11.9303 6.66691 12.6667 6.66691C13.403 6.66691 14 7.26386 14 8.00024Z" fill="#A61D4A"/>
            <path d="M9.33333 12.0002C9.33333 12.7366 8.73638 13.3336 8 13.3336C7.26362 13.3336 6.66667 12.7366 6.66667 12.0002C6.66667 11.2639 7.26362 10.6669 8 10.6669C8.73638 10.6669 9.33333 11.2639 9.33333 12.0002Z" fill="#A61D4A"/>
            <path d="M4.66667 4.00024C4.66667 4.73662 4.06971 5.33358 3.33333 5.33358C2.59695 5.33358 2 4.73662 2 4.00024C2 3.26386 2.59695 2.66691 3.33333 2.66691C4.06971 2.66691 4.66667 3.26386 4.66667 4.00024Z" fill="#A61D4A"/>
            </g>
            <path d="M12.6667 9.33358C13.403 9.33358 14 8.73662 14 8.00024C14 7.26386 13.403 6.66691 12.6667 6.66691M12.6667 9.33358C11.9303 9.33358 11.3333 8.73662 11.3333 8.00024C11.3333 7.26386 11.9303 6.66691 12.6667 6.66691M12.6667 9.33358V13.3336M12.6667 6.66691V2.66691M8 10.6669C7.26362 10.6669 6.66667 11.2639 6.66667 12.0002C6.66667 12.7366 7.26362 13.3336 8 13.3336C8.73638 13.3336 9.33333 12.7366 9.33333 12.0002C9.33333 11.2639 8.73638 10.6669 8 10.6669ZM8 10.6669V2.66691M3.33333 5.33358C4.06971 5.33358 4.66667 4.73662 4.66667 4.00024C4.66667 3.26386 4.06971 2.66691 3.33333 2.66691C2.59695 2.66691 2 3.26386 2 4.00024C2 4.73662 2.59695 5.33358 3.33333 5.33358ZM3.33333 5.33358V13.3336" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round"/>
            </svg>            
        }
    ]
    let liMap = arrayIcon.map(({name, svg}, id)=>{
        return(
            <LayoutLi canClick={true} hide={hideNav} isActive={name === currentParam} Text={name} icon={svg} linkHref={name === 'Overview' ? '/' : `/${name}`} key={id}/>
        )
    })
    
    useEffect(()=>{
        let db= window.indexedDB.open('keepinglyDB', 1.0)
        db.onupgradeneeded=()=>{
            console.log('profile upgrade')
            let result = db.result
            result.createObjectStore('user', {keyPath: 'id'})
        }
    }, [])
    return(
        <nav className={`${style.sidebar} ${hideNav && style.left}`}>
                    <div className={style.floatBtn} onClick={()=> setHideNav(!hideNav)}>
                        <svg className={ hideNav ? style.rotate : ""} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="white"/>
                            <path d="M20.0003 14.6667L14.667 20.0001L20.0003 25.3334" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M24.0003 14.6667L18.667 20.0001L24.0003 25.3334" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <Image src={'/asset/logo/logoHide.png'} alt='keepingly logo' width={34} height={40} style={{display: hideNav ? 'block': 'none'}} />
                    <Image src={'/asset/logo/logo.png'} alt='keepingly logo' width={116 } height={40} style={{display: hideNav ? 'none' : 'block'}}/>
                    <ul>
                    {liMap}
                    </ul>
                    <div className={`${style.cta}  ${hideNav && style.hide}`}>
                        <p className={style.text}>Your free plan</p>
                        <div className={style.textHolder}>
                            <p className={style.earn}>Uploads</p>
                            <div className={style.text}>
                            <span>25</span>/<span>100</span>
                            </div>
                        </div>
                        <div className={`${style.upload}`}>
                            <div></div>
                        </div>
                        <button>Upgrade now</button>
                        <p className={style.earn + ' ' + style.underline}>Earn more storage</p>
                    </div>
                </nav>
    )
}