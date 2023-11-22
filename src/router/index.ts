import { createWebHistory, createRouter } from 'vue-router';
import type { App } from 'vue';
import routes from './routes';

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export const useRouter = (app: App<Element>): void => {
  app.use(router);
};
