import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/components/Layout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/components/Home.vue'),
        },
        {
          path: '/sub',
          name: 'sub',
          component: () => import('@/components/Sub.vue'),
        },
        {
          path: '/three',
          name: 'three',
          component: () => import('@/components/Three.vue'),
        },
      ],
    },
  ],
})

export default router
