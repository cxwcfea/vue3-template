import type { RouteRecordRaw } from 'vue-router';
import DashboardIndex from '@/views/dashboard/DashboardIndex.vue';

const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardIndex,
  },
];

export default dashboardRoutes;
