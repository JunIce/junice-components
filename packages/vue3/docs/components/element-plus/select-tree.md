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

const treeValue = ref();
const treeRef = ref();

watch(
  () => treeValue.value,
  () => console.log(treeValue.value),
);

onMounted(() => {
  console.log(treeRef.value);
});

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
];

const treeProps = {
  defaultExpandAll: true,
  props: {
    children: 'children',
    label: 'label',
  },
};

const popoverProps = {};
</script>
```

:::

<!-- <DemoForm /> -->

## props

| 属性         | 类型                 | 默认值 | 说明                   |
| ------------ | -------------------- | ------ | ---------------------- |
| v-model      | object               | -      | 双向绑定数据           |
| treeProps    | object               | -      | 有关 tree 相关的 props |
| popoverProps | ColumnOption[]object | -      | popover 相关 props     |
