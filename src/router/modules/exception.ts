import type { RouteRecordRaw } from 'vue-router';

const errorRoutes: RouteRecordRaw[] = [
  {
    path: '/404',
    name: 'NotFound',
    meta: {
      title: 'Page Not Found',
    },
    component: () => import('@/views/exception/404.vue'),
  },
  // 所有未定义路由，全部重定向到 404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
];

export default errorRoutes;
