import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "@/pages/Home";
import Commands from "@/pages/Commands";
import Users from "@/pages/Users";
import Command from "@/pages/Command";
import Manage from "@/pages/Manage";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/commands",
    component: Commands,
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/command/:id",
    component: Command,
  },
  {
    path: "/manage",
    component: Manage,
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
