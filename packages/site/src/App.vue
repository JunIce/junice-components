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
  mounted() {
    config.forEach(async (c) => {
      const raw = await c.module();
      const html = mRender.render(raw.default);
      this.$router.addRoute({
        path: c.path,
        name: c.label,
        component: {
          template: `<main class="content">${html}</main>`,
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
