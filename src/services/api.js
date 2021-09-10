import axios from "axios";
const api = axios.create({
  // baseURL: "http://localhost:3000/app",
  baseURL: "https://robson-bot-1.herokuapp.com/app",
});
export default api;
