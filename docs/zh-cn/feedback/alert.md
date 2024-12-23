# Alert提示

Alert提示组件用于在页面上显示重要通知或警告信息。它们通常用于通知用户某些操作的结果或引起对重要信息的注意。

## 用法

`MAlert` 组件可以在页面上显示一个简单的警告或通知信息。

<MAlert>Hello Alert</MAlert>

```html
<template>
  <MAlert>Hello Alert</MAlert>
</template>
```

## 类型

`type` 属性允许您指定要显示的警报类型。可用的类型有 `success`、`info`、`warning` 和 `danger`。

<MAlert type="success">成功警报</MAlert>
<MAlert type="info">信息警报</MAlert>
<MAlert type="warning">警告警报</MAlert>
<MAlert type="danger">错误警报</MAlert>

```html
<template>
  <MAlert type="success">成功警报</MAlert>
  <MAlert type="info">信息警报</MAlert>
  <MAlert type="warning">警告警报</MAlert>
  <MAlert type="danger">错误警报</MAlert>
</template>
```

## 显示图标

通过设置 `showIcon` 属性，可以在警告信息中显示一个图标。

<MAlert showIcon>Hello Alert</MAlert>

```html
<template>
  <MAlert showIcon>Hello Alert</MAlert>
</template>
```

## 自定义图标

`icon` 属性允许您自定义图标。您可以使用插槽或属性来实现这一点。

<MAlert showIcon icon="close">Hello Alert</MAlert>

```html
<template>
  <MAlert showIcon icon="close">Hello Alert</MAlert>
</template>
```

## 显示标题

通过设置 `title` 属性或使用插槽，您可以显示一个标题。

<MAlert title="警告标题">Hello Alert</MAlert>

```html
<template>
  <MAlert title="警告标题">Hello Alert</MAlert>
</template>
```

使用插槽设置标题：

```html
<template>
  <MAlert>
  <template #title>
    警告标题
  </template>
  Hello Alert
  </MAlert>
</template>
```

## 显示关闭图标

通过设置 `showClose` 属性，可以显示一个关闭图标，允许用户关闭警报。

<MAlert showClose>Hello Alert</MAlert>

```html
<template>
  <MAlert showClose>Hello Alert</MAlert>
</template>
```

## API

`Alert` 组件用于向用户显示重要信息。它可以用于显示成功、错误、警告或信息性消息。

#### 属性

| 名称     | 类型     | 描述                                              | 默认值 |
|----------|----------|---------------------------------------------------|--------|
| `type`   | string   | 要显示的警报类型。可能的值有 `success`、`error`、`warning` 和 `info`。 | -      |
| `title`  | string   | 在警报中显示的标题。                              | -      |
| `closable`| boolean | 如果为 true，用户可以关闭警报。                   | false  |
| `close`  | function | 当警报关闭时调用的回调函数。                      | -      |

#### 示例

```html
<template>
  <Alert type="success" title="这是一个成功警报" closable @close="handleClose" />
</template>

<script>
export default {
  methods: {
  handleClose() {
    console.log('警报已关闭');
  }
  }
}
</script>
```
