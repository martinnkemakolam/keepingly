import EditProperty from "../../(pages)/editPage"

export default async function EditPbnage(params) {
    let id = params.params.id
    return(
        <EditProperty id={id}/>
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
