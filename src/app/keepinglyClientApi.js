// Import the Axios library for making HTTP requests
import axios from "axios";

export let api = axios.create({
    baseURL: 'https://pre.api.keepingly.co',
    withCredentials: true
});

api.interceptors.response.use(
    async (res) => {
        console.log('called cli')
        let refresh_token = localStorage.getItem('kprt');
        let tkn = await axios.post(`https://pre.api.keepingly.co/api/v2/refresh`, {"refresh_token": refresh_token})
        res.headers.Authorization = `Bearer ${tkn.data.access_token}`
        console.log('ran client')
        return res
    },
    async (err) => err);
