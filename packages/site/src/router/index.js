import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/pages/404.vue'),
    hidden: true,
  },
];

export default new VueRouter({
  base: `/`,
  mode: 'hash', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
});
