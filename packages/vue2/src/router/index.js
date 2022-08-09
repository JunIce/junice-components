import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 公共路由
export const constantRoutes = [
  {
    path: "/404",
    component: () => import("@/views/error/404"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/error/401"),
    hidden: true,
  },
];

export default new VueRouter({
  base: `/`,
  mode: "history", // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
});
