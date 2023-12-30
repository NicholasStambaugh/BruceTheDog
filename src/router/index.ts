import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import twentyThreeVue from '@/views/twenty-three.vue'
import twentyTwoVue from '@/views/twenty-two.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/twenty-three',
      name: 'twenty-three',
      component: twentyThreeVue
    },
    {
      path: '/twenty-two',
      name: 'twenty-three',
      component: twentyTwoVue
    }
  ]
})

export default router
