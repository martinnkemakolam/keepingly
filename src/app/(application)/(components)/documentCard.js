import Image from "next/image";
import style from '@/style/video.module.css'
export default function DocumentCard ({optValue,name, time, showMenu = false}){
    return(
        <div className={style.document}>
            <Image src={''} alt="" width={265} height={200}/>
            <div className={style.documentCard}>
                <div className={style.cardFrame}>
                    <p className={style.cardFrameText1}>{name}</p>
                    <p className={style.cardFrameText2}>{time}</p>
                </div>
                <div>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25016 8.66669C8.61835 8.66669 8.91683 8.36821 8.91683 8.00002C8.91683 7.63183 8.61835 7.33335 8.25016 7.33335C7.88197 7.33335 7.5835 7.63183 7.5835 8.00002C7.5835 8.36821 7.88197 8.66669 8.25016 8.66669Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.25016 4.00002C8.61835 4.00002 8.91683 3.70154 8.91683 3.33335C8.91683 2.96516 8.61835 2.66669 8.25016 2.66669C7.88197 2.66669 7.5835 2.96516 7.5835 3.33335C7.5835 3.70154 7.88197 4.00002 8.25016 4.00002Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.25016 13.3334C8.61835 13.3334 8.91683 13.0349 8.91683 12.6667C8.91683 12.2985 8.61835 12 8.25016 12C7.88197 12 7.5835 12.2985 7.5835 12.6667C7.5835 13.0349 7.88197 13.3334 8.25016 13.3334Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            {
                showMenu && <div className={style.menu}>
                <div className={style.menuBlock}>
                    <p className={style.menuText}>View {optValue}</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M8.00016 3.33331C3.75774 3.33331 1.3335 7.99998 1.3335 7.99998C1.3335 7.99998 3.75774 12.6666 8.00016 12.6666C12.2426 12.6666 14.6668 7.99998 14.6668 7.99998C14.6668 7.99998 12.2426 3.33331 8.00016 3.33331ZM10.0002 7.99998C10.0002 9.10455 9.10473 9.99998 8.00016 9.99998C6.89559 9.99998 6.00016 9.10455 6.00016 7.99998C6.00016 6.89541 6.89559 5.99998 8.00016 5.99998C9.10473 5.99998 10.0002 6.89541 10.0002 7.99998Z" fill="#333333"/>
                        <path d="M1.3335 7.99998C1.3335 7.99998 3.75774 3.33331 8.00016 3.33331C12.2426 3.33331 14.6668 7.99998 14.6668 7.99998C14.6668 7.99998 12.2426 12.6666 8.00016 12.6666C3.75774 12.6666 1.3335 7.99998 1.3335 7.99998Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.00016 9.99998C9.10473 9.99998 10.0002 9.10455 10.0002 7.99998C10.0002 6.89541 9.10473 5.99998 8.00016 5.99998C6.89559 5.99998 6.00016 6.89541 6.00016 7.99998C6.00016 9.10455 6.89559 9.99998 8.00016 9.99998Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={style.menuBlock}>
                    <p className={style.menuText}>Rename</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.15" d="M2.6665 13.3333H5.33317L11.9998 6.66667L9.33317 4L2.6665 10.6667V13.3333Z" fill="#333333"/>
                        <path d="M2.6665 10.6667L2.13617 10.1363L1.9165 10.356V10.6667H2.6665ZM11.3332 2L11.8635 1.46967C11.5706 1.17678 11.0957 1.17678 10.8028 1.46967L11.3332 2ZM13.9998 4.66667L14.5302 5.197C14.8231 4.9041 14.8231 4.42923 14.5302 4.13634L13.9998 4.66667ZM5.33317 13.3333V14.0833H5.64383L5.8635 13.8637L5.33317 13.3333ZM2.6665 13.3333H1.9165C1.9165 13.7475 2.25229 14.0833 2.6665 14.0833V13.3333ZM3.19683 11.197L11.8635 2.53033L10.8028 1.46967L2.13617 10.1363L3.19683 11.197ZM10.8028 2.53033L13.4695 5.197L14.5302 4.13634L11.8635 1.46967L10.8028 2.53033ZM13.4695 4.13634L4.80284 12.803L5.8635 13.8637L14.5302 5.197L13.4695 4.13634ZM5.33317 12.5833H2.6665V14.0833H5.33317V12.5833ZM3.4165 13.3333V10.6667H1.9165V13.3333H3.4165ZM8.80284 4.53033L11.4695 7.197L12.5302 6.13634L9.8635 3.46967L8.80284 4.53033Z" fill="#333333"/>
                    </svg>
                </div>
                <div className={style.menuBlock}>
                    <p className={style.menuText}>Send to Appraiser's Edge</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.15" d="M13.3333 2.66669L2 7.33335L6.66667 9.33335L8.66667 14L13.3333 2.66669Z" fill="#333333"/>
                        <path d="M13.3333 2.66669L2 7.33335L6.66667 9.33335L8.66667 14L13.3333 2.66669Z" stroke="#333333" stroke-width="1.5" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={style.menuBlock}>
                    <p className={style.menuText}>Download to device</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3332 9.33333V12C13.3332 12.7364 12.7362 13.3333 11.9998 13.3333H3.99984C3.26346 13.3333 2.6665 12.7364 2.6665 12V9.33333M7.99984 10L7.99984 2M7.99984 10L5.33317 7.33333M7.99984 10L10.6665 7.33333" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={style.menuBlock}>
                    <p className={style.menuText}>Delete</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.15" d="M12 12V4H4V12C4 12.7364 4.59695 13.3333 5.33333 13.3333H10.6667C11.403 13.3333 12 12.7364 12 12Z" fill="#E20000"/>
                        <path d="M11.9998 4V12C11.9998 12.7364 11.4029 13.3333 10.6665 13.3333H5.33317C4.59679 13.3333 3.99984 12.7364 3.99984 12V4M9.99984 4V3.33333C9.99984 2.59695 9.40288 2 8.6665 2H7.33317C6.59679 2 5.99984 2.59695 5.99984 3.33333V4M2.6665 4H13.3332" stroke="#E20000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            }
        </div>
    )
}