<template>
  <div class="table-responsive">
    <table class="table" :class="cls">
      <thead>
        <renderThHeadNodes />
      </thead>
      <tbody>
        <renderTrNodes />
      </tbody>
    </table>
  </div>
</template>
<script setup lang="tsx">
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
  align: {
    type: String,
    default: 'left',
  },
  customRowClass: {
    type: Function,
  },
});

const slots = useSlots();

const cls = computed(() => {
  return {
    'table-hover': props.hover,
    'table-bordered': props.border,
    'table-striped': props.stripe,
  };
});

/**
 * 渲染table header
 */
const renderThHeadNodes = () => {
  return (
    <tr align={props.align}>
      {props.options.map((option: any) => {
        return <th key={option.prop}>{option.title}</th>;
      })}
    </tr>
  );
};

/**
 * 渲染table row
 */
const renderTrNodes = () => {
  return props.data.map((row: any, index: number) => {
    const cls = props.customRowClass ? props.customRowClass({ row, index }) : {};
    return (
      <tr key={index} class={cls} align={props.align}>
        {props.options.map((option: any) => {
          return (
            <td prop={option.prop} key={option.prop}>
              {renderContent(row, option.prop, index)}
            </td>
          );
        })}
      </tr>
    );
  });
};

/**
 * 内容渲染
 * @param row
 * @param prop
 * @param idx
 */
const renderContent = (row: any, prop: string, idx: number) => {
  if (slots[prop]) return slots[prop]!({ row, prop });
  if (prop === '$index') return idx + 1;
  return row[prop];
};
</script>
<style lang="scss">
@import '@/styles/table/index.scss';
</style>
