import { createRouter, createWebHistory } from "vue-router";

import Home from "./Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./About.vue"),
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("./Blogs.vue"),
  },
  {
    path: "/blogs/:index",
    name: "blog-detail",
    component: () => import("../article/Article.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
