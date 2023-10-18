import style from "@/style/keeptrack.module.css"
export let Grade=({begin, end})=>{
    let grade = [
        {text: 'Very poor',
        grade: 0,
        col: '#E20000'
    }, {text: 'Poor',
    grade: 11,
    col: '#EC5555'}, {text: 'Fair',
    grade: 21,
    col: '#C3A868'}, {text: 'Good',
    grade: 41,
    col: '#A67D1D'}, {text: 'Very good',
    grade: 61,
    col: '#64AC7C'}, {text: 'Excellent',
    grade: 81,
    col: '#17823B'}]

    let grader=()=>{
        return grade.filter((ele)=>{
            if (ele.grade === begin) {
                return ele
            }
        })
    }
    let value = grader()
    return(
        <div className={style.grade}>
            <p className={style.gradeText}>
                {begin}-{end}
            </p>
            <p className={style.gradeText2} style={{color: value[0].col}}>{value[0].text}</p>
        </div>
    )
}