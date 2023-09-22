import Image from 'next/image'

import style from '../../../style/properties.module.css'
export default function TopBar({title, buttonText, btnFunc, showSearch}) {
    return(
        <>
        <header className={style.header}>
            <div className={style}>
                <h1>{title}</h1>
                {
                    buttonText && <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.66675 8L13.3334 8" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <button className={style.button} onClick={()=> btnFunc()}>{buttonText}</button>
                    </>
                }
            </div>
            {
                showSearch && <>
            <div className={style.input}>
                <input  placeholder="Enter search text" type="text"/>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.15" d="M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7Z" fill="#333333"/>
                    <path d="M12.803 13.8637C13.0959 14.1566 13.5708 14.1566 13.8637 13.8637C14.1566 13.5708 14.1566 13.0959 13.8637 12.803L12.803 13.8637ZM11.25 7C11.25 9.34721 9.34721 11.25 7 11.25V12.75C10.1756 12.75 12.75 10.1756 12.75 7H11.25ZM7 11.25C4.65279 11.25 2.75 9.34721 2.75 7H1.25C1.25 10.1756 3.82436 12.75 7 12.75V11.25ZM2.75 7C2.75 4.65279 4.65279 2.75 7 2.75V1.25C3.82436 1.25 1.25 3.82436 1.25 7H2.75ZM7 2.75C9.34721 2.75 11.25 4.65279 11.25 7H12.75C12.75 3.82436 10.1756 1.25 7 1.25V2.75ZM13.8637 12.803L11.0719 10.0113L10.0113 11.0719L12.803 13.8637L13.8637 12.803Z" fill="#333333"/>
                </svg>
            </div>
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.15" d="M12 6C9.79088 6 8.00002 7.79086 8.00002 10C8.00002 12.6667 6.66669 15.3333 6.66669 15.3333H17.3334C17.3334 15.3333 16 12.6667 16 10C16 7.79086 14.2092 6 12 6Z" fill="#333333"/>
                    <path d="M6.66669 15.3333L5.99587 14.9979C5.87962 15.2304 5.89204 15.5065 6.0287 15.7276C6.16535 15.9487 6.40675 16.0833 6.66669 16.0833V15.3333ZM17.3334 15.3333V16.0833C17.5933 16.0833 17.8347 15.9487 17.9713 15.7276C18.108 15.5065 18.1204 15.2304 18.0042 14.9979L17.3334 15.3333ZM8.75002 10C8.75002 8.20507 10.2051 6.75 12 6.75V5.25C9.37667 5.25 7.25002 7.37665 7.25002 10H8.75002ZM12 6.75C13.7949 6.75 15.25 8.20507 15.25 10H16.75C16.75 7.37665 14.6234 5.25 12 5.25V6.75ZM7.25002 10C7.25002 11.2199 6.9427 12.4669 6.62184 13.4295C6.46291 13.9063 6.30406 14.3033 6.18566 14.5796C6.12654 14.7175 6.07773 14.8248 6.04434 14.8964C6.02765 14.9321 6.01484 14.9589 6.00654 14.9761C6.00239 14.9846 5.99938 14.9908 5.99757 14.9945C5.99667 14.9963 5.99607 14.9975 5.99578 14.9981C5.99563 14.9984 5.99557 14.9985 5.99558 14.9985C5.99559 14.9985 5.99562 14.9984 5.99567 14.9983C5.99569 14.9983 5.99574 14.9982 5.99575 14.9982C5.99581 14.998 5.99587 14.9979 6.66669 15.3333C7.33751 15.6687 7.33758 15.6686 7.33765 15.6685C7.33769 15.6684 7.33777 15.6682 7.33783 15.6681C7.33796 15.6678 7.33811 15.6675 7.33828 15.6672C7.33861 15.6665 7.33903 15.6657 7.33953 15.6647C7.34052 15.6627 7.34184 15.66 7.34346 15.6567C7.34669 15.6502 7.35116 15.641 7.35678 15.6294C7.36801 15.6062 7.38385 15.5731 7.40362 15.5307C7.44314 15.446 7.4985 15.3242 7.56438 15.1704C7.69598 14.8634 7.87046 14.427 8.04487 13.9038C8.39068 12.8664 8.75002 11.4468 8.75002 10H7.25002ZM6.66669 16.0833H17.3334V14.5833H6.66669V16.0833ZM17.3334 15.3333C18.0042 14.9979 18.0042 14.998 18.0043 14.9982C18.0043 14.9982 18.0044 14.9983 18.0044 14.9983C18.0044 14.9984 18.0044 14.9985 18.0045 14.9985C18.0045 14.9985 18.0044 14.9984 18.0043 14.9981C18.004 14.9975 18.0034 14.9963 18.0025 14.9945C18.0007 14.9908 17.9976 14.9846 17.9935 14.9761C17.9852 14.9589 17.9724 14.9321 17.9557 14.8964C17.9223 14.8248 17.8735 14.7175 17.8144 14.5796C17.696 14.3033 17.5371 13.9063 17.3782 13.4295C17.0573 12.4669 16.75 11.2199 16.75 10H15.25C15.25 11.4468 15.6094 12.8664 15.9552 13.9038C16.1296 14.427 16.3041 14.8634 16.4357 15.1704C16.5015 15.3242 16.5569 15.446 16.5964 15.5307C16.6162 15.5731 16.632 15.6062 16.6433 15.6294C16.6489 15.641 16.6533 15.6502 16.6566 15.6567C16.6582 15.66 16.6595 15.6627 16.6605 15.6647C16.661 15.6657 16.6614 15.6665 16.6618 15.6672C16.6619 15.6675 16.6621 15.6678 16.6622 15.6681C16.6623 15.6682 16.6624 15.6684 16.6624 15.6685C16.6625 15.6686 16.6625 15.6687 17.3334 15.3333ZM13.25 16C13.25 16.6904 12.6904 17.25 12 17.25V18.75C13.5188 18.75 14.75 17.5188 14.75 16H13.25ZM12 17.25C11.3097 17.25 10.75 16.6904 10.75 16H9.25002C9.25002 17.5188 10.4812 18.75 12 18.75V17.25ZM10.75 16V15.3333H9.25002V16H10.75ZM14.75 16V15.3333H13.25V16H14.75Z" fill="#333333"/>
                </svg>
            </div>
            <div>
                <Image alt="user image" src={'/asset/avatar/avatar.png'} width={40} height={40}/>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.66699 6.66675L8.00033 10.0001L11.3337 6.66675" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            </>
}
        </header>
        <svg width="42" height="2" viewBox="0 0 42 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H41" stroke="#A61D4A" stroke-linecap="round"/>
        </svg>
    </>
    )
}