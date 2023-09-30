import EditProperty from "../../(hoc)/editPage";
export default async function EditPbnage(params) {
    let id = params.params.id
    return(
        <div>
        <EditProperty id={id}/>
        </div>
    )
}

export const dynamicParams = true
export function generateStaticParams(){
    console.log('called')
    return [
        {
            id: '0'
        }
    ]
}
