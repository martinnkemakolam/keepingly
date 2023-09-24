export default function Tick({className, ticked}) {
    return (
        <div className={className}>
            { ticked ?
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.15" d="M3.1665 2.66663H13.8332V13.3333H3.1665V2.66663Z" fill="#AAAAAA"/>
                <path d="M3.1665 2.66663H13.8332V13.3333H3.1665V2.66663Z" stroke="#AAAAAA" stroke-width="1.5" stroke-linejoin="round"/>
            </svg> : 
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.15" d="M2.9165 2.66663H13.5832V13.3333H2.9165V2.66663Z" fill="#A61D4A"/>
                <path d="M11.5832 5.99996L6.91649 10.6666L4.91646 8.66663M2.9165 2.66663H13.5832V13.3333H2.9165V2.66663Z" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            }
        </div>
    )
}