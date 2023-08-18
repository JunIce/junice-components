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
import { ElCommonFormItem, ColumnOption } from '../../src/components/form/index';

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
