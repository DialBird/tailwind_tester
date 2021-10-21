import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/components/Layout.vue"),
      children: [
        {
          path: "/sub",
          name: "sub",
          component: () => import("@/components/Sub.vue"),
        },
      ],
    },
  ],
});

export default router;
