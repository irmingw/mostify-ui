<style scoped lang="scss">
  .button_test {
    display: flex;
    flex-wrap: wrap;
    alight-items: center;
    gap: 10px;
  }

  </style>

# Button 按钮

Button 按钮组件设计思路：一个按钮由颜色、形状、大小组成，按钮的颜色由 <code>type</code> 字段控制，形状由 <code>shape</code> 字段控制，大小由 <code>size</code> 字段控制。

其中，按钮还有属性控制状态，如禁用 <code>disabled</code>、加载中<code>loading</code>等。

<MAlert show-icon title="提示">Button 支持水波纹效果，使得反馈效果更加明显</MAlert>

## 按钮类型 type

确保你的组件已经完成安装和引入，详见[快速上手](/zh-cn/config/start.html)，如你已经安装和引入了组件，那么你可以开始使用它了。

类型渲染效果：

<div class="button_test">
  <m-button type="default">MOSTIFY BUTTON</m-button>
  <m-button type="primary">MOSTIFY BUTTON</m-button>
  <m-button type="danger">MOSTIFY BUTTON</m-button>
  <m-button type="warning">MOSTIFY BUTTON</m-button>
  <m-button type="success">MOSTIFY BUTTON</m-button>
  <m-button type="info">MOSTIFY BUTTON</m-button>
  <m-button type="text">MOSTIFY BUTTON</m-button>
  <m-button type="link">MOSTIFY BUTTON</m-button>
</div>

```html
<template>
  <m-button type="default">MOSTIFY BUTTON</m-button>
  <m-button type="primary">MOSTIFY BUTTON</m-button>
  <m-button type="danger">MOSTIFY BUTTON</m-button>
  <m-button type="warning">MOSTIFY BUTTON</m-button>
  <m-button type="success">MOSTIFY BUTTON</m-button>
  <m-button type="info">MOSTIFY BUTTON</m-button>
  <m-button type="text">MOSTIFY BUTTON</m-button>
  <m-button type="link">MOSTIFY BUTTON</m-button>
</template>
```

## 按钮形状 shape

注意：shape 属性当中 圆形 和正方形按钮会控制宽高一样，round 会根据内容自动撑开。

形状渲染效果：

<div class="button_test">
  <m-button shape="round" type="danger">基础按钮</m-button>
  <m-button shape="square" type="success">M</m-button>
  <m-button shape="circle" type="primary">M</m-button>
  <m-button shape="circle" type="info">M</m-button>
</div>

```html
<template>
  <m-button shape="round" type="danger">基础按钮</m-button>
  <m-button shape="square" type="success">M</m-button>
  <m-button shape="circle" type="primary">M</m-button>
  <m-button shape="circle" type="link">M</m-button>
</template>
```

## 按钮大小 size

大小渲染效果：

<div class="button_test">
  <m-button size="large" type="primary">大按钮</m-button>
  <m-button size="small" type="info">中按钮</m-button>
  <m-button size="mini" type="success">小按钮</m-button>
</div>

```html
<template>
  <m-button size="large" type="primary">大按钮</m-button>
  <m-button size="small" type="info">中按钮</m-button>
  <m-button size="mini" type="success">小按钮</m-button>
</template>
```

## 按钮状态

状态渲染效果：

<div class="button_test">
  <m-button disabled>禁用按钮</m-button>
  <m-button loading type="primary">加载中</m-button>
</div>

```html
<template>
  <m-button disabled>禁用按钮</m-button>
  <m-button loading type="primary">加载中</m-button>
</template>
```

## Border

该按钮默认具有边框，您可以设置border属性以确定是否保留边框

<div class="button_test">
  <m-button :border="false">BUTTON</m-button>
  <m-button :border="false" type="primary" light>BUTTON</m-button>
</div>

```html
<template>
  <m-button :border="false">BUTTON</m-button>
  <m-button :border="false" type="primary" light>BUTTON</m-button>
</template>
```

## Border Style

您可以设置borderStyle属性以完成按钮边框样式设置

<div class="button_test">
  <m-button borderStyle="solid">BUTTON</m-button>
  <m-button borderStyle="dashed" >BUTTON</m-button>
</div>

```html
<template>
  <m-button borderStyle="solid">BUTTON</m-button>
  <m-button borderStyle="dashed">BUTTON</m-button>
</template>
```

## 浅色主题

浅色主题渲染效果：

<div class="button_test">
  <m-button light type="primary">类型按钮</m-button>
  <m-button light type="danger">类型按钮</m-button>
  <m-button light type="warning">类型按钮</m-button>
  <m-button light type="success">类型按钮</m-button>
</div>

```html
<template>
  <m-button light type="primary">类型按钮</m-button>
  <m-button light type="danger">类型按钮</m-button>
  <m-button light type="warning">类型按钮</m-button>
  <m-button light type="success">类型按钮</m-button>
</template>
```

## 按钮图标

<div class="button_test">
    <m-button type="link" icon="like-fill" shape="circle" />
    <m-button type="primary" icon="like-fill" shape="circle" />
    <m-button type="danger" light icon="like-fill" shape="circle" />
    <m-button type="text" light icon="like-fill" shape="circle" />
    <m-button type="primary"  icon="like-fill" >HELLO</m-button>
    <m-button type="info"  icon="like-fill" >HELLO</m-button>
</div>

```html
<template>
  <m-button type="link" icon="like-fill" shape="circle" />
  <m-button type="primary" icon="like-fill" shape="circle" />
  <m-button type="danger" light icon="like-fill" shape="circle" />
  <m-button type="text" light icon="like-fill" shape="circle" />
  <m-button type="primary" icon="like-fill">HELLO</m-button>
  <m-button type="info" icon="like-fill">HELLO</m-button>
</template>
```

## Block

<m-button type="primary" block >MOSTIFY BLOCK BUTTON</m-button>
<m-button type="info" block >MOSTIFY BLOCK BUTTON</m-button>
<m-button type="danger" block >MOSTIFY BLOCK BUTTON</m-button>

```html
<template>
  <m-button type="primary" block>MOSTIFY BLOCK BUTTON</m-button>
</template>
```

## API

| 属性        | 说明      | 类型       | 可选值                                           | 默认值  |
| ----------- | --------- | ---------- | ------------------------------------------------ | ------- |
| type        | 按钮类型  | string     | default/primary/danger/warning/success/text/link | default |
| shape       | 按钮形状  | string     | round/square/circle                              | -       |
| size        | 按钮大小  | string     | large/small/mini                                 | small   |
| disabled    | 禁用按钮  | boolean    | -                                                | false   |
| loading     | 加载中    | boolean    | -                                                | false   |
| light       | 浅色主题  | boolean    | -                                                | false   |
| Block       | 宽度 100% | boolean    | -                                                | false   |
| icon        | 图标      | string,jsx | -                                                | -       |
| border      | 边框可见  | boolean    | -                                                | true    |
| borderStyle | 边框样式  | boolean    | -                                                | solid   |

## 事件

| 事件  | 说明             | 参数      |
| ----- | ---------------- | --------- |
| click | 点击按钮触发事件 | ()=> void |
| focus | 点击按钮触发事件 | ()=> void |
| blur  | 点击按钮触发事件 | ()=> void |

## 主题变量

会根据全局变量中使用，当然你可以直接在当前组件重新修改变量，以便于控制你的按钮主题

```scss
--m-primary-[number]: #0960fd;
--m-success-[number]: #0960fd;
--m-error-[number]: #0960fd;
--m-warning-[number]: #0960fd;
```
