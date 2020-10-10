import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layouter from "../components/Layouter/index.vue";
import Home from "../views/Home/index.vue";
import Reminder from "../views/Reminder/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Layouter,
    redirect: "/",
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          breadcrumbName: "首页"
        }
      },
      {
        path: "/reminder",
        name: "Reminder",
        component: Reminder,
        meta: {
          breadcrumbName: "提醒事项"
        }
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login/index.vue")
  }
];

export { routes };

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
