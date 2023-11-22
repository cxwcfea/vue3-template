import type { RouteRecordRaw } from 'vue-router';

const tableRoutes: RouteRecordRaw[] = [
  {
    path: '/table',
    name: 'Table',
    component: () => import('@/views/table/TableIndex.vue'),
  },
];

export default tableRoutes;
