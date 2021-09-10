import axios from "axios";
import api from "@/services/api";

class AuthService {
  login(user) {
    return axios
      .post(api.defaults.baseURL + "/users/login", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return { status: response.status, data: response.data };
      })
      .catch((error) => {
        if (error.response) {
          return { status: error.response.status, error };
        }
      });
  }
  async logout() {
    await localStorage.removeItem("user");
  }
  register(user) {
    return axios
      .post(api.defaults.baseURL + "/users/signup", {
        username: user.username,
        name: user.name,
        password: user.password,
      })
      .then((response) => {
        return { status: response.status, data: response.data };
      })
      .catch((error) => {
        if (error.response) {
          return { status: error.response.status, error };
        }
      });
  }
  verifyToken(token) {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      Buffer.from(base64, "base64")
        .toString("ascii")
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    // console.log(token);
    return JSON.parse(jsonPayload);
  }
}
export default new AuthService();
