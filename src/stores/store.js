import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import command from "./modules/command";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    command
  },
});

export default store;
