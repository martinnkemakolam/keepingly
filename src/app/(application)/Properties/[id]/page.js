import EditProperty from "../../(hoc)/editPage";
export default async function EditPbnage(params) {
    let id = await getData(params.params.id)
    return(
        <>
        <EditProperty id={id}/>
        </>
    )
}

export const dynamicParams = true
export function generateStaticParams(){
    return [
        {
            id: '0'
        }
    ]
}
export async function getData(id) {
    let data = await fetch('https://dummyjson.com/carts', {cache: 'no-store'})
    return id
}