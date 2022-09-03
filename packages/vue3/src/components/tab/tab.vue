<template>
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active">
      <a href="#home" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true"
        ><span class="visible-xs"><i class="ti-home"></i></span
        ><span class="hidden-xs"> Home</span></a
      >
    </li>
    <li role="presentation" class="">
      <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"
        ><span class="visible-xs"><i class="ti-user"></i></span>
        <span class="hidden-xs">Profile</span></a
      >
    </li>
    <li role="presentation" class="">
      <a
        href="#messages"
        aria-controls="messages"
        role="tab"
        data-toggle="tab"
        aria-expanded="false"
        ><span class="visible-xs"><i class="ti-email"></i></span>
        <span class="hidden-xs">Messages</span></a
      >
    </li>
    <li role="presentation" class="">
      <a
        href="#settings"
        aria-controls="settings"
        role="tab"
        data-toggle="tab"
        aria-expanded="false"
        ><span class="visible-xs"><i class="ti-settings"></i></span>
        <span class="hidden-xs">Settings</span></a
      >
    </li>
  </ul>
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
@import '@/styles/tab/index.scss';
</style>
