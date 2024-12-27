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

`direction` 属性可以设置间距组件的布局方式，默认为 `horizontal` 水平方向，设置为 `vertical` 时为垂直方向。
<m-space size="12px" direction="vertical">

  <div>10px</div>
  <div>20px</div>
  <div>30px</div>
</m-space>

```html
<m-space size="12px" direction="vertical">
  <div>10px</div>
  <div>20px</div>
  <div>30px</div>
</m-space>
```

## 对其方式

alignItems 属性原生css属性，用来设置元素在父元素中垂直对齐的方式。

<m-space size="12px">

<m-space size="12px">
  <m-button>Hello Space</m-button>
  <m-button size="large">Hello Space</m-button>
  <m-button>Hello Space</m-button>
</m-space>

<m-space size="12px" alignItems="center">
  <m-button>Hello Space</m-button>
  <m-button size="large">Hello Space</m-button>
  <m-button>Hello Space</m-button>
</m-space>

<m-space size="12px" alignItems="flex-end">
  <m-button>Hello Space</m-button>
  <m-button size="large">Hello Space</m-button>
  <m-button>Hello Space</m-button>
</m-space>
</m-space>

```html
<m-space size="12px">
  <m-button>Hello Space</m-button>
  <m-button size="large">Hello Space</m-button>
  <m-button>Hello Space</m-button>
</m-space>

<m-space size="12px" alignItems="center">
  <m-button>Hello Space</m-button>
  <m-button size="large">Hello Space</m-button>
  <m-button>Hello Space</m-button>
</m-space>

<m-space size="12px" alignItems="flex-end">
  <m-button>Hello Space</m-button>
  <m-button size="large">Hello Space</m-button>
  <m-button>Hello Space</m-button>
</m-space>
```

## 间距组件的属性

| attribute  | description                 | Type                    | Default Value |
| ---------- | --------------------------- | ----------------------- | ------------- |
| size       | Set the size of the spacing | string                  | `0`           |
| direction  | Set direction               | `horizontal` `vertical` | `horizontal`  |
| alignItems | Set alignment method        | string                  | `flex-start`  |
