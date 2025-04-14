import { createRouter, createWebHashHistory } from 'vue-router'

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
  history: createWebHashHistory(),
  routes
})

export default router 