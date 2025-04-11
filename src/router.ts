import { createRouter, createWebHistory } from "vue-router";
import ROUTE from "./config/route";
import Home from "./pages/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE.HOME,
      component: Home,
    },
  ],
});

export default router;
