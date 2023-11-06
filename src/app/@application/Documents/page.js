import { DocumentPage } from "../(pages)/Document";

export default function Page(params){
    return(
        <DocumentPage query={params.searchParams}/>
    )
}