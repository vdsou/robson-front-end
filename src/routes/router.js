import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "@/pages/Home";
import Commands from "@/pages/Commands";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/commands",
    component: Commands,
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
