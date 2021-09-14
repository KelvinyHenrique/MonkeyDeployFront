import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Body from "@/views/Body/Body.vue";
import Ecommerce from "@/views/Analytics/Ecommerce/Ecommerce.vue";
import Layout from "@/views/Ecommerce/Layout/Layout.vue";
import Deploy from "@/views/Apps/Deploy/Deploy.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Body",
    component: Body,
    children: [
      {
        path: "analytics/ecommerce",
        name: "Ecommerce",
        component: Ecommerce,
      },
      {
        path: "apps/deploy",
        name: "Deploy",
        component: Deploy,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
