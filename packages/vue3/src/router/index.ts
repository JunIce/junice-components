import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../pages/layout/index.vue';
import routes from '../site.config';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/components',
    },
    {
      path: '/components',
      component: Layout,
      children: routes.map((r) => {
        return {
          path: r.path,
          name: r.name,
          component: r.module,
        };
      }),
    },
  ],
});
