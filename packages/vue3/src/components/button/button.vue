<template>
  <button :class="cls">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
  block: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
  },
});

const cls = computed(() => {
  return {
    btn: true,
    'btn-block': props.block,
    'btn-default': props.type === 'default',
    'btn-info': props.type === 'info',
    'btn-primary': props.type === 'primary',
    'btn-success': props.type === 'success',
    'btn-danger': props.type === 'danger',
    'btn-warning': props.type === 'warning',
    disabled: props.disabled,
    'btn-outline': props.outline,
    'btn-rounded': props.round,
    'btn-circle': props.circle,
    'btn-lg': props.size === 'large',
    'btn-sm': props.size === 'small',
    'btn-xs': props.size === 'mini',
  };
});
</script>
<style lang="scss" scoped>
@import '../../styles/button/index.scss';
</style>
