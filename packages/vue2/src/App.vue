<template>
  <div class="sub-viewer">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scoped>
.sub-viewer {
  height: calc(100vh - 120px);
  overflow-y: auto;
}
</style>
