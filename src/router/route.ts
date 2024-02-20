import { RouteConfig } from 'vue-router';

// 公共路由
export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/default'
  },
  {
    name: 'Default',
    path: '/default',
    component: () => import('@/views/default.vue')
  },
  {
    name: 'Primary',
    path: '/primary',
    component: () => import('@/views/primary.vue')
  },
  {
    name: 'Success',
    path: '/success',
    component: () => import('@/views/success.vue')
  },
  {
    name: 'Info',
    path: '/info',
    component: () => import('@/views/info.vue')
  },
  {
    name: 'Warning',
    path: '/warning',
    component: () => import('@/views/warning.vue')
  },
  {
    name: 'Danger',
    path: '/danger',
    component: () => import('@/views/danger.vue')
  }
]
