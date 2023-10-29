// Import the Axios library for making HTTP requests
import axios from "axios";

export let api = axios.create({
    baseURL: 'https://pre.api.keepingly.co',
    withCredentials: true
});

api.interceptors.response.use(
    async (res) => {
        let refresh_token = localStorage.getItem('kprt');
        let tkn = await axios.post(`https://pre.api.keepingly.co/api/v2/refresh`, {"refresh_token": refresh_token})
        res.headers.Authorization = `Bearer ${tkn.data.access_token}`
        return res
    },
    async (err) =>{
        console.log(err)
        return err
    });
