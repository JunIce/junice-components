import Vue from 'vue';
import VueRouter from 'vue-router';
import routeConfig from '../../site.config';
import { mRender } from '../utils/parse';
import { compile } from 'vue-template-compiler';

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

// console.log(compile(str));

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

const str = `<template>
<div class="side-container">
  <side-tree :options="options"></side-tree>
</div>
</template>

<script>
export default {
data() {
  return {
    options: [
      {
        label: '零、基础知识',
      },
      {
        label: '一、安装VScode编辑器和MinGW编译器',
        children: [
          {
            label: '1.VScode编辑器',
          },
          {
            label: '1.2.安装VScode扩展插件',
          },
          {
            label: '2.MinGW编译器编译器',
          },
          {
            label: '2.1.下载编译器',
          },
          {
            label: '2.2.安装编译器',
          },
          {
            label: '2.3.编译器验证',
          },
        ],
      },
      {
        label: '二、程序文件的架构',
        children: [
          {
            label: '1.语言学习环境',
          },
          {
            label: '1.1单文件编译运行调试',
          },
          {
            label: '1.2简单多文件编译运行调试',
          },
          {
            label: '2.实际项目开发环境',
          },
        ],
      },
      {
        label: '三、配置一个新项目',
        children: [
          {
            label: '1.创建配置c_cpp_properties.json文件',
          },
          {
            label: '2.创建配置tasks.json文件',
          },
          {
            label: '3.创建配置launch.json文件',
          },
        ],
      },
      {
        label: '四、一些小tips',
        children: [
          {
            label: '1.多文件编译',
          },
          {
            label: '2.中文乱码',
          },
        ],
      },
    ],
  }
}
}
</script>

<style>
.side-container {
width: 350px;
}
</style>`;
