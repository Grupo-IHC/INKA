import axios from "axios";


export const inkaApi = axios.create({
  baseURL: "https://inkaback-production.up.railway.app"
})

// inkaApi.interceptors.request.use( config => {
//   config.headers = {
//     ...config.headers,
//     'Bearer' :  localStorage.getItem('token')
//   }
//   return config;
// })