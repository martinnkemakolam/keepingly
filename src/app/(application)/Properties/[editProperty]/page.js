import EditProperty from "../../(hoc)/editPage";
export const dynamicParams = true
export default function EditPbnage(params) {
    let id = params.params.editProperty
    return(
        <>
        <EditProperty id={id}/>   
        </>
    )
}