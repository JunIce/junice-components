# SelectTree

## Usage

:::demo

```vue
<template>
  <SelectTree
    ref="treeRef"
    v-model="treeValue"
    :treeData="data"
    :treeProps="treeProps"
    :popoverProps="popoverProps"
  ></SelectTree>
</template>

<script setup lang="ts">
import { computed, ref, toRaw, h, defineComponent, watch, onMounted } from 'vue';
import { SelectTree } from '@/components/select-tree/index';
interface Tree {
  label: string;
  children?: Tree[];
}

const treeValue = ref([7]);
const treeRef = ref();

watch(
  () => treeValue.value,
  () => console.log(treeValue.value),
);

onMounted(() => {
  console.log(treeRef.value);
});

const data = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
];

const treeProps = {
  defaultExpandAll: true,
  nodeKey: 'id',
  showCheckbox: false,
  props: {
    children: 'children',
    label: 'label',
    class: (data, node) => {
      if (node.checked) {
        return 'node-checked';
      }
    },
  },
};

const popoverProps = {};
</script>
<style>
.node-checked {
  background: blue;
  color:#fff;
}
</style>
```

:::

<!-- <DemoForm /> -->

## props

| 属性         | 类型                 | 默认值 | 说明                   |
| ------------ | -------------------- | ------ | ---------------------- |
| v-model      | object               | -      | 双向绑定数据           |
| treeProps    | object               | -      | 有关 tree 相关的 props |
| popoverProps | ColumnOption[]object | -      | popover 相关 props     |
