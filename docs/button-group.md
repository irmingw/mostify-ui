# Button Group

Button groups are used to group a set of buttons together.

## Usage

Use the `direction` prop to set the layout of the buttons.
Use the `size` prop to set the size of the buttons.

## Direction

values: `horizontal` | `vertical`

<m-button-group layout="horizontal">
  <m-button type="primary">Button 1</m-button>
  <m-button type="primary">Button 2</m-button>
  <m-button type="primary">Button 3</m-button>
</m-button-group>

```html
<m-button-group layout="horizontal">
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

values: `large` | `small` | `mini`

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
<m-button-group size="mini">
  <m-button type="default">Button 1</m-button>
  <m-button type="default">Button 2</m-button>
  <m-button type="default">Button 3</m-button>
</m-button-group>
```

## API

### Button Group Props

| Prop        | Type                    | Default      | Description                              |
| ----------- | ----------------------- | ------------ | ---------------------------------------- |
| `direction` | `horizontal` `vertical` | `horizontal` | Layout of the buttons                    |
| `size`      | `small` `mini` `large`  | `small`        | Size of the buttons (large, small, mini) |
