import {cookies} from 'next/headers'
import { AddExpense } from '../../(pages)/addExpense'
import { apiServer } from '@/app/keepinglyServerApi'
export default async function page(params) {
    let data = await getExp(params.params.id)
    return (<AddExpense edit={data}/>)
}

let cookieIns = cookies()
let tk = cookieIns.get('kpat').value
async function getExp(id){
    let data = await apiServer.get(`/api/v2/get_single/expense/${id}/`, {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${tk}`
        }
    })
    console.log('daat', data)
    return data.data.payload[0]
}

export async function generateStaticParams(){
    let data = await apiServer.get('/api/v2/get_expense/', {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${tk}`
        }
    })
    return data.data.data.map((ele)=>{
       return {
        id: `${ele.id}`
       } 
    })
}