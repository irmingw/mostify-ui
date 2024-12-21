# Button Group

Button groups are used to group a set of buttons together.

## Usage

Use the `layout` prop to set the layout of the buttons.
Use the `size` prop to set the size of the buttons.

## Layout

values: `x` | `y`

<m-button-group layout="x">
  <m-button type="primary">Button 1</m-button>
  <m-button type="primary">Button 2</m-button>
  <m-button type="primary">Button 3</m-button>
</m-button-group>

```html
<m-button-group layout="x">
  <m-button type="primary">Button 1</m-button>
  <m-button type="primary">Button 2</m-button>
  <m-button type="primary">Button 3</m-button>
</m-button-group>
```

<m-button-group layout="y">
  <m-button type="danger">Button 1</m-button>
  <m-button type="danger">Button 2</m-button>
  <m-button type="danger">Button 3</m-button>
</m-button-group>

```html
<m-button-group layout="y">
  <m-button type="danger">Button 1</m-button>
  <m-button type="danger">Button 2</m-button>
  <m-button type="danger">Button 3</m-button>
</m-button-group>
```

## Size

values: `large` | `small` | `mini`

<m-button-group layout="x" size="large">
  <m-button type="warning">Button 1</m-button>
  <m-button type="warning">Button 2</m-button>
  <m-button type="warning">Button 3</m-button>
</m-button-group>

```html
<m-button-group layout="x" size="large">
  <m-button type="warning">Button 1</m-button>
  <m-button type="warning">Button 2</m-button>
  <m-button type="warning">Button 3</m-button>
</m-button-group>
```

<m-button-group layout="x" size="small">
  <m-button type="success">Button 1</m-button>
  <m-button type="success">Button 2</m-button>
  <m-button type="success">Button 3</m-button>
</m-button-group>

```html
<m-button-group layout="x" size="small">
  <m-button type="success">Button 1</m-button>
  <m-button type="success">Button 2</m-button>
  <m-button type="success">Button 3</m-button>
</m-button-group>
```

<m-button-group layout="x" size="mini">
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

| Prop         | Type    | Default   | Description                              |
| ------------ | ------- | --------- | ---------------------------------------- |
| `layout`     | String  | `x`       | Layout of the buttons (x or y)         |
| `size`       | String  | - small        | Size of the buttons (large, small, mini) |
