import axios from "axios";

export const inkaApi = axios.create({
  baseURL: "https://inkaback-production-c8bb.up.railway.app"
})
