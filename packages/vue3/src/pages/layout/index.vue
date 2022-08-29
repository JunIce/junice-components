<template>
  <div class="page">
    <header>header</header>
    <section>
      <div class="page-side">
        <ul class="menu-container">
          <li class="menu-item" v-for="menu in menus" :key="menu.name">
            <router-link :to="menu.path">
              {{ menu.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="page-content"><router-view></router-view></div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import routes from '../../site.config';

const menus = ref(routes);

console.log('routes', routes);
</script>
<style lang="scss" scoped>
$header-height: 50px;

.page {
  height: 100%;
  width: 100%;

  header {
    height: $header-height;
    line-height: $header-height;
    border-bottom: 1px solid #f7f6dc;
    background-color: #293462;
    color: #f7f6dc;
    padding: 0 20px;
    box-sizing: border-box;
  }

  section {
    height: calc(100% - $header-height);
    display: flex;
  }

  .page-side {
    width: 200px;
    // border-right: 1px solid #f1f1f1;
    // overflow-y: auto;
  }

  .menu-container {
    overflow-y: auto;

    .menu-item {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;
        color: #333;
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 40px;
        color: inherit;
      }

      &:hover {
        background-color: #2b4865;
        color: #f1f1f1;
      }
    }
  }
}
</style>
