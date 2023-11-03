import Image from "next/image";
import style from "@/style/properties.module.css"
import Link from "next/link";
export default function Card({imgSrc, isPrimary, City, state, postal, Address1, id}) {
    return(
        <Link href={`/Properties/[id]`} as={`/Properties/${id}`} className={style.card}>
            <Image className={style.img} src={imgSrc} width={382} height={270} alt="property"/>
            <div>
                <div>
                {isPrimary && <div  className={`${style.primaryResident} `}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6769 6.48578L8.67688 1.76828C8.67443 1.76615 8.67213 1.76385 8.67 1.76141C8.48591 1.59399 8.24602 1.50122 7.99719 1.50122C7.74836 1.50122 7.50846 1.59399 7.32438 1.76141L7.3175 1.76828L2.32312 6.48578C2.22125 6.57946 2.13993 6.69327 2.08431 6.82C2.02869 6.94673 1.99998 7.08363 2 7.22203V13.0002C2 13.2654 2.10536 13.5197 2.29289 13.7073C2.48043 13.8948 2.73478 14.0002 3 14.0002H6C6.26522 14.0002 6.51957 13.8948 6.70711 13.7073C6.89464 13.5197 7 13.2654 7 13.0002V10.0002H9V13.0002C9 13.2654 9.10536 13.5197 9.29289 13.7073C9.48043 13.8948 9.73478 14.0002 10 14.0002H13C13.2652 14.0002 13.5196 13.8948 13.7071 13.7073C13.8946 13.5197 14 13.2654 14 13.0002V7.22203C14 7.08363 13.9713 6.94673 13.9157 6.82C13.8601 6.69327 13.7788 6.57946 13.6769 6.48578ZM13 13.0002H10V10.0002C10 9.73494 9.89464 9.48059 9.70711 9.29305C9.51957 9.10552 9.26522 9.00016 9 9.00016H7C6.73478 9.00016 6.48043 9.10552 6.29289 9.29305C6.10536 9.48059 6 9.73494 6 10.0002V13.0002H3V7.22203L3.00688 7.21578L8 2.50016L12.9937 7.21453L13.0006 7.22078L13 13.0002Z" fill="white"/>
                        </svg>
                        <div>
                            Primary residence
                        </div>
                    </div>}
                    <div>
                        <h1 className={style.cardH1}>{Address1}</h1>
                        <p className={style.cardP}>{City}</p>
                        <p className={style.cardP}>{state}, <span>{postal}</span></p>
                    </div>
                </div>
                    <Link  href={`/Documents?propId=${id}`} className={style.emptyBtn} style={{justifySelf: 'flex-end'}}>
                        View document 
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3333 7.99992L4.66666 7.99992M11.3333 7.99992L8.66666 10.6666M11.3333 7.99992L8.66666 5.33325" stroke="#A61D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
            </div>
        </Link>
    )
}