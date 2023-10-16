import {earn, underline, text, alignCenter} from "@/style/layout.module.css"
import style from '@/style/properties.module.css'
import Card from "../(presentation)/card"
import PropertyInfo from "./propertyInfo"
import Link from "next/link"
export default function Table({h1Text, arrProperties}) {
    let properties = arrProperties?.map((ele, id)=>{
        return(
        <>
            <Card key={id} Address1={ele.address1} state={ele.state} City={ele.cty} postal={ele.zipcode} imgSrc={ele.file} isPrimary={ id === 0 ? true: false} id={id}/>
        </>
        )
    })
    return (
        <>
        <div className={style.table}>
                <PropertyInfo h1Text={h1Text} arrProperties={arrProperties}/>
                <div className={style.row}>
                    <Link href={'/Properties/addproperty'} className={ arrProperties.length > 0 ?  `${style.card} ${style.justifyCenter}` : style.addProperty}>
                        <div>
                            <div className={style.centerText}>
                                <svg width="91" height="24" viewBox="0 0 91 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.15" d="M5.5 10L12.5 3L19.5 10L19.5 20H5.5L5.5 10Z" fill="#838383"/>
                                    <path d="M5.5 10L12.5 3L19.5 10L19.5 20H5.5L5.5 10Z" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M45.5 7V17M40.5 12L50.5 12" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path opacity="0.15" d="M70.5 10L78.5 3L86.5 10L86.5 20H81.5V16C81.5 15.2044 81.1839 14.4413 80.6213 13.8787C80.0587 13.3161 79.2957 13 78.5 13C77.7044 13 76.9413 13.3161 76.3787 13.8787C75.8161 14.4413 75.5 15.2043 75.5 16V20H70.5L70.5 10Z" fill="#838383"/>
                                    <path d="M70.5 10L78.5 3L86.5 10L86.5 20H81.5V16C81.5 15.2044 81.1839 14.4413 80.6213 13.8787C80.0587 13.3161 79.2957 13 78.5 13C77.7044 13 76.9413 13.3161 76.3787 13.8787C75.8161 14.4413 75.5 15.2043 75.5 16V20H70.5L70.5 10Z" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div>
                                <p className={text + ' ' + alignCenter}><span className={underline + ' ' + earn}>Click</span> to add a property</p>
                                <p className={text + ' ' + alignCenter}>Expand your portfolio by adding a new property.</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {arrProperties.length > 0 && properties}
                </div>
            </div>
        </>
    )
}