import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/layout/index.vue"
const routes = [
  {
    path: '',
    component: Layout,
    redirect: '/login',
    children: [
      { path: 'login', component: () => import('@/views/login/index.vue') },
      { path: 'three', component: () => import('@/views/three/index.vue') },
    ]
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router