<template>
  <div class="table-responsive">
    <table class="table" :class="cls">
      <thead>
        <tr>
          <th v-for="option in options" :key="option.prop">{{ option.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Deshmukh</td>
          <td>Prohaska</td>
          <td>@Genelia</td>
          <td><span class="label label-danger">admin</span></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Deshmukh</td>
          <td>Gaylord</td>
          <td>@Ritesh</td>
          <td><span class="label label-info">member</span></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Sanghani</td>
          <td>Gusikowski</td>
          <td>@Govinda</td>
          <td><span class="label label-warning">developer</span></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Roshan</td>
          <td>Rogahn</td>
          <td>@Hritik</td>
          <td><span class="label label-success">supporter</span></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Joshi</td>
          <td>Hickle</td>
          <td>@Maruti</td>
          <td><span class="label label-info">member</span></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Nigam</td>
          <td>Eichmann</td>
          <td>@Sonu</td>
          <td><span class="label label-success">supporter</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { defineProps, useSlots } from 'vue';
const props = defineProps({
  hover: {
    type: Boolean,
    default: true,
  },
  border: {
    type: Boolean,
    default: true,
  },
  stripe: {
    type: Boolean,
    default: true,
  },
  options: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
});

const cls = computed(() => {
  return {
    'table-hover': props.hover,
    'table-bordered': props.border,
    'table-striped': props.stripe,
  };
});
</script>
<style lang="scss" scoped>
@import '@/styles/panel/index.scss';
</style>
