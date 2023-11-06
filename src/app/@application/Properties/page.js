import { Properties } from "../(pages)/property";
import {cookies} from 'next/headers'
import { apiServer } from "@/app/keepinglyServerApi";


export default async function Page(params) {
    console.log(params)
    let property = await getProperties()
    console.log(property)
    return(
        <Properties property={property}/>
    )
}

async function getProperties(){
    let userToken = cookies().get('kpat')
    try {
        let prop = await apiServer.get(`/api/v2/get_property_user/`, {headers: {
            'Authorization': `Bearer ${userToken.value}`,
            "Content-Type": 'application/json'
        }})
        console.log(prop)
        if (prop.status !== 200){
            throw prop.statusText
        }
        let propetiiesJson = prop.data
        return propetiiesJson
    } catch (error) {
        console.log('this your custom error ' + error)
    }
}


