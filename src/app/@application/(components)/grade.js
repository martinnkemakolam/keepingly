import style from "@/style/keeptrack.module.css"
export let Grade=({begin, end})=>{
    let grade = [
        {text: 'Very poor',
        grade: 0,
        col: ''
    }, {text: 'Poor',
    grade: 11,
    col: ''}, {text: 'Fair',
    grade: 21,
    col: ''}, {text: 'Good',
    grade: 41,
    col: ''}, {text: 'Very good',
    grade: 61,
    col: ''}, {text: 'Excellent',
    grade: 81,
    col: ''}]

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
            <p className={style.gradeText2}>{value[0].text}</p>
        </div>
    )
}