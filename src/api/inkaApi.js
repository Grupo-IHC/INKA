import axios from "axios";


export const inkaApi = axios.create({
  baseURL: "https://inkaback-production.up.railway.app"
})