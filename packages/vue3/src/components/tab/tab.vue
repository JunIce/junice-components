<template>
  <ul class="nav nav-tabs" role="tablist">
    <li
      v-for="tab in tabs"
      role="presentation"
      :class="{ active: current == tab.key }"
      @click="toggleTab(tab)"
    >
      <a href="#home" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true"
        ><span class="visible-xs"><i class="ti-home"></i></span
        ><span class="hidden-xs">{{ tab.title }}</span></a
      >
    </li>
  </ul>
  <div class="tab-content">
    <RenderTabContent />
  </div>
</template>
<script setup lang="tsx">
import { computed } from '@vue/reactivity';
import { defineProps, useSlots, ref } from 'vue';
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
  value: String,
});

const slots: any = useSlots();
const current = ref(props.value);

const tabs = computed<Array<any>>(() => {
  const children = slots.default();

  return children.map((item: any) => {
    return {
      title: item.props.title,
      key: item.props.key || item.props.title,
    };
  });
});

if (!current.value) {
  current.value = tabs.value[0].key;
}

const toggleTab = (tab: any) => {
  current.value = tab.key;
};

const TabContent = (props: any) => {
  console.log(props);

  return (
    <div
      role="tabpane"
      class={{
        'tab-pane': true,
        active: current.value === props.id,
      }}
      id={props.id}
    >
      {props.children}
    </div>
  );
};

const RenderTabContent = () =>
  slots.default().map((child: any) => {
    return <TabContent children={child.children.default()} id={child.props.key} />;
  });

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
<style lang="scss">
@import '@/styles/tab/index.scss';
</style>
