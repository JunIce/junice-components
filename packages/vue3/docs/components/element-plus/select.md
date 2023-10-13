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


## props

[https://element-plus.org/en-US/component/select.html#select](https://element-plus.org/en-US/component/select.html#select)