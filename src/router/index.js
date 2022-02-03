import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '../views/ViewHome.vue'

const routes = [
  {
    path: '/',
    name: 'ViewHome',
    component: ViewHome
  },
  {
    path: '/about',
    name: 'ViewAbout',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewAbout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
