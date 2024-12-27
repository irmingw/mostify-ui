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

The `direction` property can be used to set the layout of spacing components. The default direction is `horizontal`, and when set to `vertical`, it is vertical.
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

## Regarding its method

The alignItems property is a native CSS property used to set the vertical alignment of elements within the parent element.

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

## Properties of spacing components

| attribute  | description                 | Type                    | Default Value |
| ---------- | --------------------------- | ----------------------- | ------------- |
| size       | Set the size of the spacing | string                  | `0`           |
| direction  | Set direction               | `horizontal` `vertical` | `horizontal`  |
| alignItems | Set alignment method        | string                  | `flex-start`  |
