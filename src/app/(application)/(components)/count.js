import style from '@/style/video.module.css'
export let Count=({count})=>{
    return <span className={style.headerPill}>{count}</span>
}