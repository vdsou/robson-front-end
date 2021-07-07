import axios from "axios";
const api = axios.create({
  baseURL: "https://robson-bot-1.herokuapp.com/app",
});
export default api;
