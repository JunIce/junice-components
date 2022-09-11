<template>
  <li role="presentation" :class="{ active: props.isActive }">
    <a href="#home" role="tab" data-toggle="tab" aria-expanded="true"
      ><span> {{ props.title }} </span></a
    >
  </li>
</template>
<script lang="ts">
export default {
  name: 'e-tab-pane',
};
</script>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
@import '@/styles/tab/index.scss';
</style>
