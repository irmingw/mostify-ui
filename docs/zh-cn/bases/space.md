# 间距

间距组件是一个用来设置元素之间的距离的组件。

## 基础用法

<m-space size="12px">
  <div>10px</div>
  <div>20px</div>
  <div>30px</div>
</m-space>

```html
<m-space size="12px">
  <div>10px</div>
  <div>20px</div>
  <div>30px</div>
</m-space>
```

## 设置方向

layout 属性可以设置间距组件的布局方式，默认为 x 轴方向，设置为 y 时为 y 轴方向。
<m-space size="12px" layout="y">
  <div>10px</div>
  <div>20px</div>
  <div>30px</div>
</m-space>

```html
<m-space size="12px" layout="y">
  <div>10px</div>
  <div>20px</div>
  <div>30px</div>
</m-space>
```

## 对其方式

alignItems 属性原生css属性，用来设置元素在父元素中垂直对齐的方式。

<m-space size="12px">

<m-space size="12px">
  <m-button>Demo</m-button>
  <m-button size="large">Demo</m-button>
  <m-button>Demo</m-button>
</m-space>

<m-space size="12px" alignItems="center">
  <m-button>Demo</m-button>
  <m-button size="large">Demo</m-button>
  <m-button>Demo</m-button>
</m-space>

<m-space size="12px" alignItems="flex-end">
  <m-button>Demo</m-button>
  <m-button size="large">Demo</m-button>
  <m-button>Demo</m-button>
</m-space>
</m-space>

```html
<m-space size="12px">
  <m-button>Demo</m-button>
  <m-button size="large">Demo</m-button>
  <m-button>Demo</m-button>
</m-space>

<m-space size="12px" alignItems="center">
  <m-button>Demo</m-button>
  <m-button size="large">Demo</m-button>
  <m-button>Demo</m-button>
</m-space>

<m-space size="12px" alignItems="flex-end">
  <m-button>Demo</m-button>
  <m-button size="large">Demo</m-button>
  <m-button>Demo</m-button>
</m-space>
```

## 间距组件的属性

| 属性     | 类型          | 默认值      | 说明                        |
| -------- | ------------- | ----------- | ------------------------- |
| size  | string | `0` | 设置间距的大小            |
| layout | `x` `y`     | `x`          | 设置方向 |
