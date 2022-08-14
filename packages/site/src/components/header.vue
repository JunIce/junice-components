<template>
  <header class="nav-bar">
    <div>@junice/vue2</div>
  </header>
</template>

<script>
export default {
  name: 'site-header',
};
</script>

<style>
.nav-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--c-divider);
  padding: 0 20px;
  line-height: 90px;
  height: var(--header-height);
  background-color: var(--c-bg);
}
</style>
