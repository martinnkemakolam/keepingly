import Image from "next/image"
import { ClearBtn } from "./clearBtn"
import style from '@/style/overview.module.css'
export let ResourceCard=()=>{
    return(
        <div className={style.resourcesCard}>
            <Image className={style.resourceImg}  src={''} alt="" width={264} height={220}/>
            <div className={style.resourcesCardText}>
                <p className={style.resourcesCardText1}>
                    This is your vlog/resource title. it can span two lines of text
                </p>
                <p className={style.resourcesCardText2}>
                orem ipsum dolor sit amet consectetur. At amet eget integer nunc sagittis cursus mus id pellentesque.
                </p>
                <ClearBtn text={`Read more`}/>
            </div>
        </div>
    )
}