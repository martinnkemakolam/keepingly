import style from '@/style/keeptrack.module.css'
export let Score=()=>{
 return (
    <div className={style.circleHolder}>
        <div className={style.circle}>
            <div className={style.innerCircle}>
                <p className={style.innerCircleText1}>SCORE</p>
                <span className={style.innerCircleText}>750</span>
            </div>
        </div>
    </div>
 )   
}