import KeepTrackDyn from "../../(pages)/keepTrachDyn"

export default async function Page(params) {
    return(
        <KeepTrackDyn/>
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