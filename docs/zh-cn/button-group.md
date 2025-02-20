# 按钮组

按钮组用于将一组按钮组合在一起。

## 使用

使用 `direction` 属性来设置按钮的布局。
使用`size`属性来设置按钮的大小。

## Direction

值: `horizontal` | `vertical`

<m-button-group>
  <m-button type="primary">Button 1</m-button>
  <m-button type="primary">Button 2</m-button>
  <m-button type="primary">Button 3</m-button>
</m-button-group>

```html
<m-button-group>
  <m-button type="primary">Button 1</m-button>
  <m-button type="primary">Button 2</m-button>
  <m-button type="primary">Button 3</m-button>
</m-button-group>
```

<m-button-group direction="vertical">
  <m-button type="info">Button 1</m-button>
  <m-button type="info">Button 2</m-button>
  <m-button type="info">Button 3</m-button>
</m-button-group>

```html
<m-button-group direction="vertical">
  <m-button type="info">Button 1</m-button>
  <m-button type="info">Button 2</m-button>
  <m-button type="info">Button 3</m-button>
</m-button-group>
```

## Size

值: `large` | `small` | `mini`
<m-button-group size="large">
<m-button type="warning">Button 1</m-button>
<m-button type="warning">Button 2</m-button>
<m-button type="warning">Button 3</m-button>
</m-button-group>

```html
<m-button-group size="large">
  <m-button type="warning">Button 1</m-button>
  <m-button type="warning">Button 2</m-button>
  <m-button type="warning">Button 3</m-button>
</m-button-group>
```

<m-button-group size="small">
  <m-button type="success">Button 1</m-button>
  <m-button type="success">Button 2</m-button>
  <m-button type="success">Button 3</m-button>
</m-button-group>

```html
<m-button-group size="small">
  <m-button type="success">Button 1</m-button>
  <m-button type="success">Button 2</m-button>
  <m-button type="success">Button 3</m-button>
</m-button-group>
```

<m-button-group size="mini">
  <m-button type="default">Button 1</m-button>
  <m-button type="default">Button 2</m-button>
  <m-button type="default">Button 3</m-button>
</m-button-group>

```html
<m-button-group layout="x" size="mini">
  <m-button type="default">Button 1</m-button>
  <m-button type="default">Button 2</m-button>
  <m-button type="default">Button 3</m-button>
</m-button-group>
```

## API

### Button Group Props

| Prop        | Type                    | Default      | Description                              |
| ----------- | ----------------------- | ------------ | ---------------------------------------- |
| `direction` | `horizontal` `vertical` | `horizontal` | Layout of the buttons (x or y)           |
| `size`      | `small` `mini` `large`  | `small`      | Size of the buttons (large, small, mini) |
