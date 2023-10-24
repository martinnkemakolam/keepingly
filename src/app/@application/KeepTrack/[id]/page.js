export default async function KeepTrackDyn(params) {
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