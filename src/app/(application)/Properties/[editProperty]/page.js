import dynamic from "next/dynamic";
import EditProperty from "../../(hoc)/editPage";
export default async function EditPbnage(params) {
    let id = params.params.editProperty
    return(
        <>
        <EditProperty id={id}/>
        </>
    )
}

export const dynamicParams = true
export function generateStaticParams(){
    return []
}