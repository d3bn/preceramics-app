import { createRouter, createWebHashHistory } from "vue-router";
import ROUTE from "./config/route";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import Arts from "./pages/Arts.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      path: ROUTE.ARTS,
      component: Arts,
    },
    {
      path: ROUTE.WORK,
      component: NotFound,
    }
  ],
});

export default router;
