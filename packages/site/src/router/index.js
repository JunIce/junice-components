import Vue from 'vue';
import VueRouter from 'vue-router';
import routeConfig from '../../site.config';
import { mRender } from '../utils/parse';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch((err) => err);
};

const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/pages/404.vue'),
    hidden: true,
  },
];

const router = new VueRouter({
  base: `/`,
  mode: 'hash', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
});

routeConfig.forEach(async (c) => {
  const raw = await c.module();
  const html = mRender.render(raw.default);
  router.addRoute({
    path: c.path,
    name: c.label,
    component: {
      template: `<main class="content">${html}</main>`,
    },
  });
});

export default router;
