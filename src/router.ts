import { createRouter, createWebHistory } from "vue-router";
import ROUTE from "./config/route";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
    {
      path: ROUTE.HOME,
      component: Home,
    },
    {
      path: ROUTE.ART,
      component: NotFound,
    },
    {
      path: ROUTE.WORK,
      component: NotFound,
    }
  ],
});

export default router;
