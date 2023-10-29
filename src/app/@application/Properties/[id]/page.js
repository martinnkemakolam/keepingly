import {cookies, headers} from 'next/headers'
import EditProperty from "../../(pages)/editPage"
import { apiServer } from '@/app/keepinglyServerApi'

export default async function EditPage(params) {
    let id = await getProperties(params.params.id)
    return(
        <EditProperty id={id}/>
    )
}
async function getProperties(id) {
    let cookieIns = cookies()
    let tk = cookieIns.get('kpat').value
    const res = await apiServer.get(`https://pre.api.keepingly.co/api/v2/single/property/${id}/`, {
        "headers": { Authorization: `Bearer ${tk}` },
        mode: 'cors',
    });
    let Json = await res.data
    console.log(Json)
    return Json.payload
}
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export async function generateStaticParams(){
    let cookieIns = cookies()
    let tk = cookieIns.get('kpat').value
    const res = await apiServer.get("/api/v2/get_property_user/", {
        cache: "no-cache",
        'headers': { 
            Authorization: `Bearer ${tk}` 
        },
        
        mode: 'cors'
    });
    let Json = await res.data
    return Json.map((ele, id)=>{
        return(
            {
                id: `${ele.id}`
            })
    })
}
