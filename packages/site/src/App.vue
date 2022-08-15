<template>
  <div class="site-container">
    <headerVue></headerVue>
    <sideBar></sideBar>
    <main class="page">
      <MainContent></MainContent>
    </main>
  </div>
</template>

<script>
import config from '../site.config';
import { mRender } from '../src/utils/parse';
import headerVue from './components/header.vue';
import sideBar from './components/menu.vue';
import MainContent from './components/content.vue';

export default {
  components: {
    headerVue,
    sideBar,
    MainContent,
  },
  data() {
    return {
      html: '',
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
    };
  },
  mounted() {
    config.forEach(async (c) => {
      const raw = await c.module();
      const html = mRender.render(raw.default);
      this.$router.addRoute({
        path: c.path,
        name: c.label,
        component: {
          template: `<div>${html}</div>`,
        },
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.site-container {
  position: relative;
  width: 100%;
  height: 100%;

  .page {
    padding-top: var(--header-height);
    margin-left: 20rem;
  }
}
</style>
