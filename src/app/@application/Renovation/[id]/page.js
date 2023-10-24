import { ViewRenovation } from "../../(pages)/viewrenovation";

export default async function page(){
    return <ViewRenovation/>
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