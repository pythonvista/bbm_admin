import axios from 'axios'

export default defineNuxtPlugin(async (nuxtApp) => {
    // const url = `http://localhost:3001/api`
    // const url = `http://192.168.43.84:3001/api` 
    const url = `https://bbmapi.carbonwurld.com.ng/api/`
    const UseAxios = axios.create({
        baseURL: url,
        withCredentials: true,
        headers: { 'Access-Control-Allow-Origin': '*' }
        // responseType: 'json',
    });

    nuxtApp.vueApp.provide('UseAxios', UseAxios);
    nuxtApp.provide('UseAxios', UseAxios);
})