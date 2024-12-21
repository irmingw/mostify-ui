# Space

The spacing component is a component used to set the distance between elements.

## Basic usage

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

## Set direction

The layout property can be used to set the layout of spacing components, with the default being the x-axis direction and the y-axis direction when set to y.
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

## Regarding its method

The alignItems property is a native CSS property used to set the vertical alignment of elements within the parent element.

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

## Properties of spacing components

| attribute | Type    | Default Value | describe       |
| --------- | ------- | ------------- | -------------- |
| size      | string  | `0`           | 设置间距的大小 |
| layout    | `x` `y` | `x`           | 设置方向       |
