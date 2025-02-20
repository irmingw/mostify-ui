# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

在 m-breadcrumb 中使用 m-breadcrumb-item 标签表示从首页开始的每一级。 该组件接受一个 String 类型的参数 separator来作为分隔符。 默认值为 '/'。

  <m-breadcrumb separator="/">
    <m-breadcrumb-item>homepage</m-breadcrumb-item>
    <m-breadcrumb-item href="https://baodu.com" target='_blank'>promotion list</m-breadcrumb-item>
    <m-breadcrumb-item>promotion detail</m-breadcrumb-item>
  </m-breadcrumb>

```vue
<template>
  <m-breadcrumb separator="/">
    <m-breadcrumb-item>homepage</m-breadcrumb-item>
    <m-breadcrumb-item href="https://baodu.com" target='_blank'>promotion list</m-breadcrumb-item>
    <m-breadcrumb-item>promotion detail</m-breadcrumb-item>
  </m-breadcrumb>
</template>
```

## 图标分隔符

<m-breadcrumb>
  <template #separator>
    <m-icon name="right" />
  </template>
  <m-breadcrumb-item>homepage</m-breadcrumb-item>
  <m-breadcrumb-item href="https://baodu.com" target='_blank'>promotion list</m-breadcrumb-item>
  <m-breadcrumb-item>promotion detail</m-breadcrumb-item>
</m-breadcrumb>

```vue

<template>
  <m-breadcrumb>
    <template #separator> 
      <m-icon name="right" />
    </template>
    <m-breadcrumb-item>homepage</m-breadcrumb-item>
    <m-breadcrumb-item href="https://baodu.com" target='_blank'>promotion list</m-breadcrumb-item>
    <m-breadcrumb-item>promotion detail</m-breadcrumb-item>
  </m-breadcrumb>
</template>

```

## API

### Breadcrumb Attributes

| 参数      | 说明                     | 类型   | 可选值 | 默认值 |
| ---------- | ---------------------- | ------ | ----- | ------- |
| seprator | 分隔符                  | string | -      |  /      |

### Breadcrumb Slots

| 参数 | 说明                   |
| ---- | ---------------------- |
| seprator   | 自定义插槽分隔符 |

## BreadcrumbItem API

### BreadcrumbItem Attributes

| 参数       | 说明                     | 类型   | 可选值 | 默认值 |
| ---------- | ---------------------- | ------ | ----- | ------- |
| href       | 链接地址                  | string | —     | -       |
| target     | 链接地址打开方式             | string | —     | -       |
| disabled   | 是否禁用                  | boolean | —     | false   |
| label      | 面包屑名称                  | string | —     | -       |

### BreadcrumbItem Slots

| 参数 | 说明                   |
| ---- | ---------------------- |
| default   | 自定义插槽内容 |
