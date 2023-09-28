import EditProperty from "../../(hoc)/editPage";
export default function EditPbnage(params) {
    let id = params.params.editProperty
    return(
        <>
        <EditProperty id={id}/>   
        </>
    )
}