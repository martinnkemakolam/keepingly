import Verification from "../../(pages)/verification";

export default function Page(params){
    console.log(params)
    return(
        <Verification params={params.searchParams}/>
    )
}