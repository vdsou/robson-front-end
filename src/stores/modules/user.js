import authService from "@/services/authService";

export default {
  state: {
    user: {},
    token: localStorage.getItem("user"),
    isLogged: false,
  },
  mutations: {
    setIsLogged(state, payload) {
      state.isLogged = payload;
    },
    login(state, payload) {
      state.user = payload.userData;
      state.token = payload.userLogin.data.token;
      state.isLogged = true;
    },
    logout(state, payload) {
      state.user = {};
      state.token = "";
      state.isLogged = payload;
    },
  },
  actions: {
    async login(context, payload) {
      const userLogin = await authService.login(payload);
      if (userLogin.status != 200) {
        this.status = false;
        this.message = userLogin.error;
      } else {
        this.status = true;
        context.commit("login", { userData: payload, userLogin });
        // this.$router.push("/manage/commands")
      }
    },
    logout(context) {
      authService.logout();
      context.commit("logout", false);
    },
    isLogged(context, payload) {
      context.commit("setIsLogged", payload);
    },
  },
};
