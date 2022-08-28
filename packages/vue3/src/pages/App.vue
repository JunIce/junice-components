<script setup lang="ts">
// import Layout from './layout/index.vue';
</script>

<template>
  <div>
    <div>
      <router-link to="/">home</router-link>
      <router-link to="/foo">foo</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
