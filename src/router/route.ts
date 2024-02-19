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
]
