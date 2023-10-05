import style from "@/style/keeptrack.module.css"
export let Point=({point})=>{
    return(
        <p className={style.points}>+{point} points</p>
    )
}