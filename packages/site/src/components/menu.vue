<template>
  <div class="sidebar">
    <ul>
      <li v-for="(menu, idx) in sideMenus" :key="idx" class="menu-item" @click="goToView(menu)">
        <span>{{ menu.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import menus from '../../site.config';

export default {
  computed: {
    sideMenus() {
      return menus;
    },
  },
  methods: {
    goToView(menu) {
      this.$router.push({
        path: menu.path,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: var(--header-height);
  bottom: 0;
  left: 0;
  z-index: 10;
  border-right: 1px solid var(--c-divider);
  width: 320px;
  background-color: var(--c-bg);
  overflow-y: auto;
  // transform: translate(-100%);
  transform: translate(0);
  transition: transform 0.25s ease;
  margin-top: 1px;

  .menu-item {
    cursor: pointer;
    padding: 10px 20px;

    &:hover {
      color: var(--c-brand);
    }
  }
}
</style>
