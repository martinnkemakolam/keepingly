import { ViewRenovation } from "../../(pages)/viewrenovation";
import {apiServer} from "@/app/keepinglyServerApi"
import {cookies} from 'next/headers'
export default async function page({params: {id}}){
    let data = await getReno(id)
    return <ViewRenovation data={data[0]}/>
}

export const dynamicParams = true

async function getReno(renovation_id){
    let tk = cookies().get('kpat').value
    let data = await apiServer.get(`/api/v2/renovations/details/${renovation_id}/`, {
        headers: {
            Authorization: `Bearer ${tk}`,
            'Content-Type': 'application/json'
        }
    })
    return data.data.payload
}
export async function generateStaticParams(){
    let data = await apiServer.get('/api/v2/get/all/renovation/', {
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tkn}`
        }
    })
    return data.data.data.map((ele)=>({
        id: ele.id
    }))
}