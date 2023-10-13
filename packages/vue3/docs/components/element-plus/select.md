# Select 下拉

用于动态生成表单`Select`的 json 配置

## Usage

:::demo

```vue
<template>
  <ElSelect v-model="value" class="m-2" placeholder="Select" size="large" @change="handleChange">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </ElSelect>
</template>

<script setup lang="ts">
import { ElOption } from 'element-plus';
import { ElSelect } from '@/components/select/index';
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const handleChange = v => console.log(v)
</script>
```

:::

<!-- <DemoForm /> -->

## props

| 属性             | 类型           | 默认值 | 说明             |
| ---------------- | -------------- | ------ | ---------------- |
| v-model:formData | object         | -      | 双向绑定数据     |
| formOption       | FormOption     | -      | 表单配置         |
| columns          | ColumnOption[] | -      | 配置表单子项对象 |

### FormOption

| 属性       | 类型             | 默认值  | 说明                                              |
| ---------- | ---------------- | ------- | ------------------------------------------------- |
| labelWidth | string \| number | `110px` | label 的宽度                                      |
| gutter     | string \| number | 20      | item 之间的间距                                   |
| span       | string \| number | 24      | 统一设置 item 的 span 值，最大 24，参考`<el-col>` |

### ColumnOption

| 属性      | 类型                            | 默认值 | 说明                                                                            |
| --------- | ------------------------------- | ------ | ------------------------------------------------------------------------------- |
| label     | string                          | -      | 字符串                                                                          |
| prop      | string                          | -      | 对应 form 绑定属性名                                                            |
| span      | string \| number                | -      | item 的 span 值，最大 24，优先级高于`FormOption.span`                           |
| type      | string                          | -      | `"input" , "textarea" , "select" , "password" , "checkbox", "radio" , "switch"` |
| visible   | boolean                         | -      | 是否可见                                                                        |
| component | () => ComponentInternalInstance | -      | 可以动态绑定自定义组件                                                          |
| props     | Object                          | -      | 需要透传给组件的属性                                                            |
