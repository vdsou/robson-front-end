import axios from "axios";
const api = axios.create({
  // baseURL: "http://localhost:3000/app",
  baseURL: process.env.VUE_APP_API,
});
export default api;
