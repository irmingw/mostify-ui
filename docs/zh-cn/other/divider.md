# Divider 分割线

区隔内容的分割线。

## 基础用法

对不同段落的文本进行分割。

<div>
    <span>
      I sit at my window this morning where the world like a passer-by stops for
      a moment, nods to me and goes.
    </span>
    <m-divider />
    <span>
      There little thoughts are the rustle of leaves; they have their whisper of
      joy in my mind.
    </span>
  </div>

```vue
<template>
  <div>
    <span>
      I sit at my window this morning where the world like a passer-by stops for
      a moment, nods to me and goes.
    </span>
    <m-divider />
    <span>
      There little thoughts are the rustle of leaves; they have their whisper of
      joy in my mind.
    </span>
  </div>
</template>
```

## 虚线

您可以设置分隔符的样式。

  <div>
    <span>What language is thine, O sea?</span>
    <m-divider border-style="dashed" />
    <span>The language of eternal question.</span>
  </div>
  <m-divider border-style="dotted" />
  <span>What language is thy answer, O sky?</span>
  <m-divider border-style="double" />
  <span>The language of eternal silence.</span>

```vue
<template>
  <div>
    <span>What language is thine, O sea?</span>
    <m-divider border-style="dashed" />
    <span>The language of eternal question.</span>
  </div>
  <m-divider border-style="dotted" />
  <span>What language is thy answer, O sky?</span>
  <m-divider border-style="double" />
  <span>The language of eternal silence.</span>
</template>
```

## 垂直分隔线

  <div>
    <span>Rain</span>
    <m-divider direction="vertical" />
    <span>Home</span>
    <m-divider direction="vertical" border-style="dashed" />
    <span>Grass</span>
  </div>

```vue
<template>
  <div>
    <span>Rain</span>
    <m-divider direction="vertical" />
    <span>Home</span>
    <m-divider direction="vertical" border-style="dashed" />
    <span>Grass</span>
  </div>
</template>
```

## API

### Attributes

| 属性名       | 说明         | 类型                    | 默认值             |
| ------------ | ------------ | ----------------------- | ------------------ |
| `direction`  | 指定方向分割 | `horizontal` `vertical` | `horizontal`       |
| border-style | 线的样式     | `solid` `dashed` ...    | `solid`            |
| size         | 分割线间距   | string                  | `12px`             |
| color        | 分割线颜色   | string                  | var(--m-theme-400) |
