import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Details',
    name: 'Details',
    component: DetailsView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
