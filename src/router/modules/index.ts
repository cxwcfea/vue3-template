import type { RouteRecordRaw } from 'vue-router';

const rootRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
  },
];

export default rootRoutes;
