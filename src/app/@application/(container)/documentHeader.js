import { useState } from "react";
import DocumentCard from "../(presentation)/documentCard";
import Tick from "../(presentation)/tick";
import style from '@/style/video.module.css'
export default function DocumentHeader({title, setTogView,type, buttonFunc, togView}) {
    let [select, setSelect] = useState(true)
    let data = [
        {
            name: 'Video 1',
            time: '1 minute ago'
        },{
            name: 'Video 1',
            time: '1 minute ago'
        },{
            name: 'Video 1',
            time: '1 minute ago'
        },{
            name: 'Video 1',
            time: '1 minute ago'
        },{
            name: 'Video 1',
            time: '1 minute ago'
        }
    ]
    let [showId, setShowId]=useState({trigger: false, id: null})
    return(
        <>
            <div className={style.header} onClick={()=> setShowId({trigger: false, id: null})}>
                <div className={style.headerTitle}>
                    <div onClick={()=> setSelect(!select)}>
                    <Tick float={false} ticked={select}/>
                    </div>
                    <p className={style.headerText}>{title}</p>
                    <span className={style.headerPill}>7</span>
                </div>
                <div className={style.header2}>
                <button onClick={()=> buttonFunc()} className={style.headerBtn}>Add a {type}</button>
                    <div>
                        <svg width="2" height="14" viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L1 1" stroke="#D2D2D2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className={style.views}>
                        <div onClick={()=> setTogView(true)}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white"/>
                                <path d="M10.6665 12.6666H21.3332M10.6665 16H21.3332M10.6665 19.3333H21.3332" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#D2D2D2"/>
                            </svg>
                        </div>
                        <div onClick={()=> setTogView(false)}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white"/>
                                <g opacity="0.15">
                                <path d="M10.3335 17H15.0002V21.6667H10.3335V17Z" fill="#A61D4A"/>
                                <path d="M17.0002 10.3334H21.6668V15H17.0002V10.3334Z" fill="#A61D4A"/>
                                <path d="M17.0002 17H21.6668V21.6667H17.0002V17Z" fill="#A61D4A"/>
                                </g>
                                <path d="M10.3335 10.3334H15.0002V15H10.3335V10.3334Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.3335 17H15.0002V21.6667H10.3335V17Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.0002 10.3334H21.6668V15H17.0002V10.3334Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.0002 17H21.6668V21.6667H17.0002V17Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#D2D2D2"/>
                            </svg>
                        </div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.6665 6.66663L7.99984 9.99996L11.3332 6.66663" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                </div>
            <div className={ togView ? style.rowDoc : style.row} onClick={()=> showId.trigger === true && setShowId({trigger: false, id: null}) }>
                {data.map(({name, time}, id)=>{
                    return(
                    <>        
                <DocumentCard key={id} showMenu={id === showId.id} id={id} showMenuFunc={setShowId} optValue={type} name={name} view={ togView} time={time}/>
                </>)
                })}
            </div>
        </>
    )
}