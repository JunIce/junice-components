# modalContainer

命令式操作 container

### 目标 dialog

Dialog.vue

```vue
<template>
  <el-dialog :title="computedProps.title" :visible="context.visible">
    <h1>123{{ computedProps.name }}</h1>
    <el-button @click="close">close</el-button>
  </el-dialog>
</template>

<script>
export default {
  name: 'c-modal',
  props: {
    context: Object,
  },
  methods: {
    close() {
      setTimeout(() => {
        console.log(this.context);
        this.context.resolve({ data: 'this is resolve data' });
      }, 2000);
    },
  },
  computed: {
    computedProps() {
      return this.context.props || {};
    },
  },
};
</script>
```

### 统一注册

main.js

```js
import Jue from '@junice/vue2';

Vue.use(Jue);

// 统一注册
Vue.prototype.$dialogContainer.registry('test-modal', Dialog);

// 可以在生命周期的任何时候注册

this.$dialogContainer.registry('test-modal', Dialog);
```

### 使用

```js
this.$container
  .open('test-modal', {
    name: 123 + '_' + +new Date(),
    title: 'goodTitle' + +new Date(),
  })
  .then((res) => {
    console.log('resolve data', res);
  });
```

## API

### DialogProps

| name            | type     | description                               |
| --------------- | -------- | ----------------------------------------- |
| context.visible | boolean  | 显示隐藏                                  |
| context.open    | function | 开启                                      |
| context.close   | function | 关闭                                      |
| context.resolve | function | 可以 resolve 出数据到调用方，并且关闭弹窗 |
| context.props   | object   | 从调用者传递过来的数据                    |
