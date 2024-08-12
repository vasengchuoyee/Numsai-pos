import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import Allproducts from "@/views/Allproducts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      name: "about",
      component: AboutView,
    },
    {
      path: "/allproducts",
      name: "allproducts",
      component: Allproducts,
    },
  ],
});

export default router;
