import router from "@/router";
import store from "@/store";
import { Message } from "element-ui";
import { subAddRoutes } from "@/utils/common";

router.beforeEach(async (to, from, next) => {
  // 通知主应用设置网页标题
  console.log(`子应用路由跳转`, to.matched, to, from.path);
  subAddRoutes(store, router, Message, next, to, loadView);
});
const loadView = (view) => {
  // 路由懒加载
  return () => Promise.resolve(require(`@/views/modules/${view}.vue`).default);
};
// router.afterEach(() => {
// });
