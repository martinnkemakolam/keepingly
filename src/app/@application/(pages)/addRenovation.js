'use client'
import { handleInput } from "@/app/reusedFunctions"
import PropertyInfo, {} from "../(container)/propertyInfo"
import InputApp from "../(presentation)/appInput"
import { useEffect, useState } from "react"
import { api } from "@/app/keepinglyClientApi"
export let AddRenovation=()=>{
    let [formData, setFormData] = useState({})
    let [properties, setProperties] = useState([])
    let submit = async()=>{
        let tkn = sessionStorage.getItem('kpuo')
        let data = await api.post(`/api/v2/create_renovation/${properties[0].id}/`, formData, {
            headers: {
                'Authorization': `Bearer ${tkn}`,
                'Content-Type': 'application/json'
            }
        })
        console.log(data.data)
    }
    let opt = [
        'Kitchen',
        'Bathroom',
        'Living Room',
        'Bedroom',
        'Basement',
        'Attic',
        'Exterior',
        'Garden/Yard',
        'Garage',
        'Home Office',
        'Laundry/Utility Room',
        'Hallways & Stairs',
        'Dining Room',
        'Closets & Storage',
        'Other'
    ]
    useEffect(()=>{
        async function getProperties(){
            let userToken = sessionStorage.getItem('kpuo')
            console.log("this is tkn", userToken)
            try {
                let prop = await api.get(`/api/v2/get_property_user/`, {
                    headers: {
                        "Content-type": "aaplication/json",
                        Authorization: `Bearer ${userToken}`
                    }
                })
                let propetiiesJson = await prop.data
                console.log(propetiiesJson)
                setProperties(propetiiesJson || [])
                return propetiiesJson
            } catch (error) {
                console.error(error)
            }
        }
        getProperties()
    }, [])
    return(
        <>
        <PropertyInfo h1Text={`${properties[0]?.address_one} ${properties[0]?.address_two}, ${properties[0]?.state} ${properties[0]?.zipcode}`} showSvg={true} arrProperties={properties} buttonText={`Add renovation`}  buttonFunc={submit}/>
        <InputApp placeholder={`Select section`} name={`section`} optionArray={opt} inputType={'select'} label={`Section being renovated`} input={(name, value)=> handleInput(name, value, formData, setFormData)}/>
        <InputApp inputType={'date'} name={`date_complete`} label={`Date to competion`} input={(name, value)=> handleInput(name, value, formData, setFormData)} />
        </>
    )
}
