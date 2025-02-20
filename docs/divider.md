# Divider

The dividing line that separates the content.

## Basic usage

Divide the text of different paragraphs.

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

## dashed line

You can set the style of divider.

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

## Vertical divider

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

| Name         | Description                    | Type                    | Default            |
| ------------ | ------------------------------ | ----------------------- | ------------------ |
| `direction`  | Specify direction segmentation | `horizontal` `vertical` | `horizontal`       |
| border-style | Border Style                   | `solid` `dashed` ...    | `solid`            |
| size         | Separation line spacing        | string                  | `12px`             |
| color        | Color of dividing line         | string                  | var(--m-theme-400) |
