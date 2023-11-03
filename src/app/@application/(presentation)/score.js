import style from '@/style/keeptrack.module.css'
export let Score=()=>{
 return (
    <div className={style.circleHolder}>
        <div className={style.circle} style={{backgroundImage: `conic-gradient(#D28EA5 ${0}deg, #D2D2D2 0deg)`}}>
            <div className={style.innerCircle}>
                <p className={style.innerCircleText1}>SCORE</p>
                <span className={style.innerCircleText}>0</span>
            </div>
        </div>
    </div>
 )   
}