import type { RouteRecordRaw } from 'vue-router';

const errorRoutes: RouteRecordRaw[] = [
  {
    path: '/fission',
    name: 'Fission',
    meta: {
      title: '我的ID',
    },
    component: () => import('@/views/fission/PalmFission.vue'),
  },
];

export default errorRoutes;
