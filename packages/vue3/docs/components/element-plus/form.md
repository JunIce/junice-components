# Form 表单

用于动态生成表单`ElFormItem`的 json 配置

## Usage

:::demo

```vue
<template>
  <el-form
    :model="formData"
    :rules="rules"
    inline="false"
    labelWidth="100px"
    label-position="top"
    ref="formRef"
  >
    <ElCommonFormItem :formOption="formOption" v-model:formData="formData" :columns="columns">
      <template #upload="{ column }">
        <div>{{ JSON.stringify(column) }}</div>
        <el-tag>Tag 1</el-tag>
        <el-upload>
          <el-button type="primary">Click to upload</el-button>
        </el-upload>
      </template>
    </ElCommonFormItem>

    <div>
      <el-button @click="handleSubmit">submit</el-button>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { computed, ref, toRaw, h, defineComponent } from 'vue';
import type { FormInstance } from 'element-plus';
import { ElCommonFormItem, ColumnOption } from '@/components/form/index';

const formRef = ref<FormInstance>();
const formData = ref({});
const formOption = ref({
  span: 24,
});
const rules = ref({
  name: [
    {
      required: true,
    },
  ],
  password: [
    {
      required: true,
    },
  ],
});

const CustomComponent = defineComponent({
  name: 'CustomComponent',
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    return () => {
      return h(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #f1f1f1',
          },
        },
        [
          h('input', {
            value: props.modelValue,
            onInput: (e) => {
              ctx.emit('update:modelValue', e.target.value);
            },
            style: {
              margin: '0 10px',
            },
          }),
        ],
      );
    };
  },
});

const columns = computed<ColumnOption[]>(() => [
  {
    label: '名称',
    type: 'input',
    prop: 'name',
  },
  {
    label: '密码',
    prop: 'password',
    type: 'password',
  },
  {
    label: 'Activity zone',
    prop: 'region',
    type: 'select',
    props: {
      options: [
        {
          label: 'Zone one',
          value: '1',
        },
        {
          label: 'Zone two',
          value: '2',
        },
      ],
    },
  },
  {
    label: 'Activity type',
    prop: 'type',
    type: 'checkbox',
    props: {
      options: [
        {
          label: 'Online activities1',
          value: '1',
        },
        {
          label: 'Online activities2',
          value: '2',
        },
        {
          label: 'Online activities3',
          value: '3',
        },
        {
          label: 'Online activities4',
          value: '4',
        },
      ],
      onChange: (e) => {
        console.log(`checkbox onchange ${e}`);
      },
    },
  },
  {
    label: 'Resources',
    prop: 'resource',
    type: 'radio',
    props: {
      options: [
        {
          label: 'Sponsorship',
          value: '1',
        },
        {
          label: 'Venue',
          value: '2',
        },
      ],
    },
  },
  {
    label: 'Switch',
    prop: 'switch',
    type: 'switch',
    props: {
      activeText: 'Pay by month',
      inactiveText: 'Pay by year',
    },
  },
  {
    label: 'Upload Slot',
    prop: 'upload',
    span: 24,
  },
  {
    label: 'Remark',
    prop: 'remark',
    type: 'textarea',
    span: 24,
    props: {
      rows: 5,
    },
  },
  {
    label: '自定义组件',
    component: () => h(CustomComponent),
    prop: 'custom-component',
    props: {
      attr: 'custom-component',
    },
  },
]);

const handleSubmit = () => {
  formRef.value!.validate((valid) => {
    if (valid) {
      console.log(toRaw(formData.value));
    } else {
      console.log('error submit!!');
      return false;
    }
  });
};
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
