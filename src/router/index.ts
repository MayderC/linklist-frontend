import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Recovery from "../views/Recovery.vue";
import HomeLinks from "../views/HomeLinks.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:user",
    name: "user",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/home",
    name: "HomeLinks",
    component: HomeLinks,
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/Profile.vue"),
  },
  {
    path: "/recovery",
    name: "Recovery",
    component: Recovery,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
