<template>
  <ul
    class="pagination"
    :class="{
      pagination: true,
      'pagination-split': props.split,
    }"
  >
    <li>
      <a href="#"><i class="fa fa-angle-left"></i></a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>
      <a href="#"><i class="fa fa-angle-right"></i></a>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  split: {
    type: Boolean,
    default: false,
  },
  total: {
    type: Number,
  },
  current: {
    type: Number,
  },
});
</script>
<style lang="scss" scoped>
@import '@/styles/pagination/index.scss';
</style>
