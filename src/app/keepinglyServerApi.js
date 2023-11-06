// Import the Axios library for making HTTP requests
import axios, { Axios } from "axios";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";
// import {cookies} from 'next/headers'
import {cookies} from "next/headers";
// Get the refresh token from local storage
let cookie = cookies()
// Create an Axios instance with a base URL
export let apiServer = axios.create({
    baseURL: 'https://pre.api.keepingly.co'
});

    apiServer.interceptors.response.use(async res=>{
        let refresh_token = cookie.get('kprt').value
        let tkn = await axios.post(`https://pre.api.keepingly.co/api/v2/refresh`, {"refresh_token": refresh_token})
        res.headers.Authorization = `Bearer ${tkn.data.access_token}`
        return res
    }, rej => rej)