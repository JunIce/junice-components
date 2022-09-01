<template>
  <div class="panel" :class="type">
    <div class="panel-heading">
      <slot v-if="slots.title" name="title"></slot>
      <template v-else-if="props.title">{{ props.title }}</template>

      <div v-if="props.action" class="panel-action">
        <a href="#" data-perform="panel-collapse"><i class="ti-minus"></i></a>
        <a href="#" data-perform="panel-dismiss"><i class="ti-close"></i></a>
      </div>
    </div>
    <div class="panel-wrapper collapse in">
      <div class="panel-body">
        <slot></slot>
      </div>
      <div class="panel-footer"><slot name="footer"></slot></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { defineProps, useSlots } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  action: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: 'default',
  },
});

const slots = useSlots();

const type = computed(() => {
  return {
    'panel-default': props.type === 'default',
    'panel-info': props.type === 'info',
    'panel-success': props.type === 'success',
    'panel-warning': props.type === 'warning',
    'panel-danger': props.type === 'danger',
    'panel-primary': props.type === 'primary',
    'panel-inverse': props.type === 'inverse',
  };
});
</script>
<style lang="scss" scoped>
@import '@/styles/panel/index.scss';
</style>
