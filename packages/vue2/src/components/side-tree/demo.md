# SideTree

文章树形结构菜单

```vue
<template>
  <div class="side-container">
    <side-tree :options="options" @change="onChange" :fieldNames="fieldNames"></side-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fieldNames: {
        children: 'children',
        label: 'label',
        key: 'key',
      },
      options: [
        {
          label: '零、基础知识',
        },
        {
          label: '一、安装VScode编辑器和MinGW编译器',
          children: [
            {
              label: '1.VScode编辑器',
            },
            {
              label: '1.2.安装VScode扩展插件',
            },
            {
              label: '2.MinGW编译器编译器',
            },
            {
              label: '2.1.下载编译器',
            },
            {
              label: '2.2.安装编译器',
            },
            {
              label: '2.3.编译器验证',
            },
          ],
        },
        {
          label: '二、程序文件的架构',
          children: [
            {
              label: '1.语言学习环境',
            },
            {
              label: '1.1单文件编译运行调试',
            },
            {
              label: '1.2简单多文件编译运行调试',
            },
            {
              label: '2.实际项目开发环境',
            },
          ],
        },
        {
          label: '三、配置一个新项目',
          children: [
            {
              label: '1.创建配置c_cpp_properties.json文件',
            },
            {
              label: '2.创建配置tasks.json文件',
            },
            {
              label: '3.创建配置launch.json文件',
            },
          ],
        },
        {
          label: '四、一些小tips',
          children: [
            {
              label: '1.多文件编译',
            },
            {
              label: '2.中文乱码',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.side-container {
  width: 350px;
}
</style>
```

## API

### props

| name       | type                                                      | description  |
| ---------- | --------------------------------------------------------- | ------------ |
| options    | array                                                     | 数据格式     |
| fieldNames | Object{ children: 'chidren', label: 'label', key: 'key' } | 数据字段配置 |
| value      | string[] \| number[]                                      | 绑定值       |

### events

| name   | type                      | description |
| ------ | ------------------------- | ----------- |
| change | Function \| (rowid) => {} | 点击事件    |
