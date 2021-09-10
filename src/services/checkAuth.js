import authHeader from "./authHeader";
import authService from "./authService";
export default {
  auth(to, from, next) {
    const token = authHeader();
    if (Object.entries(token).length === 0) return next("/");
    return next("/commands");
  },
  loggedOut(to, from, next) {
    const token = authHeader();
    if (Object.entries(token).length === 0) return next();
    return next("/");
  },
  validity(to, from, next) {
    let json = localStorage.getItem("user");
    if (json) {
    const token = JSON.parse(json).token;
      const jwtPayload = authService.verifyToken(token);
      if (jwtPayload.exp < Date.now() / 1000) {
        authService.logout();
        next("/");
      }
      next();
    }
    else {
      next("/")
    }
  },
};
