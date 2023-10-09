import { Grade } from "./grade"
import style from "@/style/keeptrack.module.css"
export let Performance=()=>{
    return(
        <div className={style.performanceHolder}>
            <div className={style.performance}>
                <Grade begin={0} end={10}/>
                <Grade begin={11} end={20}/>
                <Grade begin={21} end={40}/>
            </div>
            <div className={style.performance}>
                <Grade begin={41} end={60}/>
                <Grade begin={61} end={80}/>
                <Grade begin={81} end={100}/>
            </div>
        </div>
    )
}