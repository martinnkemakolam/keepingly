import Tick from "./tick";

export default function DocumentHeader({}) {
    return(
        <div>
            <div>
                <Tick ticked={true}/>
                <p>{title}</p>
                <span>7</span>
            </div>
            <div>
                <button>Add a photo</button>
                <svg width="2" height="14" viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L1 1" stroke="#D2D2D2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div>
                    <div>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white"/>
                            <path d="M10.6665 12.6666H21.3332M10.6665 16H21.3332M10.6665 19.3333H21.3332" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#D2D2D2"/>
                        </svg>
                    </div>
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.15">
                            <path d="M2.3335 9.00004H7.00016V13.6667H2.3335V9.00004Z" fill="#A61D4A"/>
                            <path d="M9.00016 2.33337H13.6668V7.00004H9.00016V2.33337Z" fill="#A61D4A"/>
                            <path d="M9.00016 9.00004H13.6668V13.6667H9.00016V9.00004Z" fill="#A61D4A"/>
                            </g>
                            <path d="M2.3335 2.33337H7.00016V7.00004H2.3335V2.33337Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.3335 9.00004H7.00016V13.6667H2.3335V9.00004Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.00016 2.33337H13.6668V7.00004H9.00016V2.33337Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.00016 9.00004H13.6668V13.6667H9.00016V9.00004Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6665 6.66663L7.99984 9.99996L11.3332 6.66663" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}