import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      title: 'Главная'
    }
  },
  {
    path: '/convert',
    name: 'convert',
    component: () => import('@/pages/convert/index.vue'),
    meta: {
      title: 'Конвертация'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 