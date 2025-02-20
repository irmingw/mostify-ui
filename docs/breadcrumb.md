# Breadcrumb

Displays the location of the current page, making it easier to browser back.

## Basic usage

In m-breadcrumb, each m-breadcrumb-item is a tag that stands for every level starting from homepage. This component has a String attribute separator, and it determines the separator. Its default value is '/'.

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

## Icon separator

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

| Name      | Description       | Type  | Default |
| ---------- | ---------------------- | ------ |  ------- |
| seprator | separator character     | string |  `/`      |

### Breadcrumb Slots

| 参数 | Description              |
| ---- | ---------------------- |
| seprator   | separator character |

## BreadcrumbItem API

### BreadcrumbItem Attributes

| 参数       | Description      | Type   | Default |
| ---------- | ----------------- | ----- | ------------- |
| href       | link url                  | string     | -       |
| target     | target             | string     | -       |
| disabled   | disabled                  | boolean     | false   |
| label      | label text                  | string     | -       |

### BreadcrumbItem Slots

| 参数 | Description                   |
| ---- | ---------------------- |
| default   | label default slots text |
