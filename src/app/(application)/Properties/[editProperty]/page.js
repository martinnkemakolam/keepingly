import EditProperty from "../../(hoc)/editPage";
export const dynamicParams = true
export default async function EditPbnage(params) {
    let id = params.params.editProperty
    return(
        <>
        <EditProperty id={id}/>   
        </>
    )
}