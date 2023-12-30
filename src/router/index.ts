import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import twentyThreeVue from '@/views/twenty-three.vue'
import twentyTwoVue from '@/views/twenty-two.vue'
import twentyOneVue from '@/views/twenty-one.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/twenty-three',
      name: 'twenty-three',
      component: twentyThreeVue
    },
    {
      path: '/twenty-two',
      name: 'twenty-two',
      component: twentyTwoVue
    },
    {
      path: '/twenty-one',
      name: 'twenty-one',
      component: twentyOneVue
    }
  ]
})

export default router
