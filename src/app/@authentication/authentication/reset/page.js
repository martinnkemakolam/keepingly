import Reset from "../../(pages)/reset";

export default function Page(params){
    return (
        <Reset query={params.searchParams}/>
    )
}