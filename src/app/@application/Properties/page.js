import { Properties } from "../(pages)/property";
// import {cookies} from 'next/headers'
// import { apiServer } from "@/app/keepinglyServerApi";

// export const dynamic = "force-dynamic";
// export const fetchCache = 'force-no-store'
export default function Page(params) {
    // let property = await getProperties()
    return(
        <Properties />
    )
}


// async function getProperties(){
//     let userToken = cookies().get('kpat')
//         let prop = await apiServer.get(`/api/v2/get_property_user/`, {headers: {
//             'Authorization': `Bearer ${userToken.value}`,
//             "Content-Type": 'application/json',
//         }})
//         console.log(prop)
//         if (prop.status !== 200){
//             throw prop.statusText
//         }
//         let propetiiesJson = prop.data
//         return propetiiesJson || []
// }


