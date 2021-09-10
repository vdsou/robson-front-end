import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "@/pages/Home";
import Commands from "@/pages/Commands";
import Users from "@/pages/Users";
import Command from "@/pages/Command";
import Manage from "@/pages/Manage";
import Register from "@/components/Register";
import check from "@/services/checkAuth";
const routes = [
  {
    path: "/register",
    component: Register,
    beforeEnter: check.loggedOut,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/commands",
    component: Commands,
    beforeEnter: check.validity,
  },
  {
    path: "/users",
    component: Users,
    beforeEnter: check.validity,
  },
  {
    path: "/command/:id",
    component: Command,
    beforeEnter: check.validity,
  },
  {
    path: "/manage",
    component: Manage,
    alias: "/admin",
    children: [
      {
        path: "commands",
        component: Manage,
      },
    ],
    beforeEnter: check.validity,
    // beforeEnter: check.auth,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
