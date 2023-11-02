'use client'
import { useRouter } from "next/navigation"
import TopBar from "../(container)/Topbar"
import Table from "../(container)/table"
export let Properties=({property})=>{
    let router = useRouter()
    let btnFunc =()=>{
        router.push('./Properties/addproperty')
    }
    return (
        <>
        {/* {console.log('this is your cookie in property',document.cookie)} */}
            <TopBar title={`Properties`} showSearch={true} btnStyle1={`redFillBtn`} buttonText1={`Add a property`} btnFunc1={btnFunc} />
            <Table h1Text={`Available properties`} arrProperties={property || []} />
        </>
    )
}