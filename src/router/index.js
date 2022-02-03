import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '../views/ViewHome.vue'

const routes = [
  {
    path: '/',
    name: 'ViewHome',
    component: ViewHome
  },
  {
    path: '/settings',
    name: 'ViewSettings',
    component: () => import('../views/ViewSettings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
