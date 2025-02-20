# Avatar 头像

Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。

## 基础用法

使用 `shape` 和 `size` 属性来设置 Avatar 的形状和大小。

<m-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
<m-avatar shape="square" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
<m-avatar size="24px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>

```vue
<template>
  <m-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
  <m-avatar shape="square" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
  <m-avatar size="24px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
</template>
```

## 展示类型

支持使用图片，图标或者文字作为 Avatar。

<m-avatar icon="user" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
<m-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
<m-avatar>User</m-avatar>

```vue
<template>
  <m-avatar icon="user" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
  <m-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
  <m-avatar>User</m-avatar>
</template>
```


## 适应容器

当使用图片作为用户头像时，设置该图片如何在容器中展示。与object-fit 属性一致

<m-avatar shape="circle" fit="contain" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
<m-avatar shape="square" fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>

```vue
<template>
  <m-avatar shape="circle" fit="contain" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
<m-avatar shape="square" fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
</template>
```

## API

### Attributes

| 名称 | 说明 | 类型 | 	默认值 |
| --- | --- | --- | --- |
| icon | 设置 Avatar 的图标类型，具体参考 Icon 组件| string | - |
| size | Avatar 大小 | string | `50px` |
| shape | Avatar 形状 | `circle` `square` | `circle` |
| src | Avatar 图片的源地址 | string | - |
| src-set | 图片 Avatar 的原生 srcset 属性 | string | - |
| alt | 图片 Avatar 的原生 alt 属性 | string | - |
| fit | 当展示类型为图片的时候，设置图片如何适应容器 | 原生 | `cover`|

### Events

| 名称 | 说明 | 类型 | 
| --- | ---  | --- |
| error | 图标加载失败 | Function |


### Slots

| 插槽名称 | 说明 | 
| -----  | --- | 
| default | 自定义头像展示内容 |