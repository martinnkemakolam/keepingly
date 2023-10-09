import style from '@/style/keeptrack.module.css'
export let Score=()=>{
 return (
    <div className={style.circle}>
        <div className={style.innerCircle}>
            <p className={style.innerCircleText1}>SCORE</p>
            <span className={style.innerCircleText}>75</span>
        </div>
    </div>
 )   
}