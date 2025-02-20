<style scoped lang="scss">
  .button_test {
    display: flex;
    flex-wrap: wrap;
    alight-items: center;
    gap: 10px;
  }

  </style>

# Button

Design concept of Button component: A button consists of color, shape, and size. The color of the button is controlled by the type field, the shape is controlled by the shape field, and the size is controlled by the size field

Among them, buttons also have attribute control states, such as disabled, loading in progress, etc.

<MAlert showIcon title="Tips">Button Support water ripple effect, making the feedback effect more obvious</MAlert>

## Type

Ensure that your components have been installed and imported, see [Quick Start](/zh-cn/config/start.html) for details. If you have already installed and imported the components, you can start using them now

Type rendering effect:

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

## Shape

Note: The circular and square buttons in the shape attribute will control the width and height equally, and the round will automatically expand according to the content.

Shape rendering effect:

<div class="button_test">
  <m-button shape="round" type="primary">Shape Button</m-button>
  <m-button shape="square" type="primary">M</m-button>
  <m-button shape="circle" type="primary">M</m-button>
</div>

```html
<template>
  <m-button shape="round" type="primary">Shape Button</m-button>
  <m-button shape="square" type="primary">M</m-button>
  <m-button shape="circle" type="primary">M</m-button>
</template>
```

## Size

Size rendering effect:

<div class="button_test">
  <m-button size="large" type="primary">Large Button</m-button>
  <m-button size="small" type="info">Small Button</m-button>
  <m-button size="mini" type="success">Mini Button</m-button>
</div>

```html
<template>
  <m-button size="large" type="primary">Large Button</m-button>
  <m-button size="small" type="info">Small Button</m-button>
  <m-button size="mini" type="success">Mini Button</m-button>
</template>
```

## Status

State rendering effect:

<div class="button_test">
  <m-button disabled>Disabled Button</m-button>
  <m-button loading type="primary">Loading Button</m-button>
</div>

```html
<template>
  <m-button disabled>Disabled Button</m-button>
  <m-button loading type="primary">Loading Button</m-button>
</template>
```

## Border

The button defaults to having a border, and you can set the border property to determine whether to keep the border

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

You can set the borderStyle property to complete the button border style setting

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

## Light colored theme

Light colored theme rendering effect:

<div class="button_test">
  <m-button light type="primary">Light Button</m-button>
  <m-button light type="danger">Light Button</m-button>
  <m-button light type="warning">Light Button</m-button>
  <m-button light type="success">Light Button</m-button>
</div>

```html
<template>
  <m-button light type="primary">Light Button</m-button>
  <m-button light type="danger">Light Button</m-button>
  <m-button light type="warning">Light Button</m-button>
  <m-button light type="success">Light Button</m-button>
</template>
```

## Icon Button

<div class="button_test">
  <m-button type="link" shape="circle" >
    <m-icon name="like-fill" />
  </m-button>
  <m-button type="text" shape="square" >
    <m-icon name="like-fill" />
  </m-button>
  <m-button type="primary" shape="round" >
    <template #icon>
        <m-icon name="like-fill" />
    </template>
    HELLO
  </m-button>
</div>

```html
<template>
  <m-button type="link" shape="circle" >
    <m-icon name="like-fill" />
  </m-button>
  <m-button type="text" shape="square" >
    <m-icon name="like-fill" />
  </m-button>
  <m-button type="primary" shape="round" >
    <template #icon>
        <m-icon name="like-fill" />
    </template>
    HELLO
  </m-button>
</template>
```

## Block

<m-button type="primary" block >MOSTIFY BLOCK BUTTON</m-button>

```html
<template>
  <m-button type="primary" block>MOSTIFY BLOCK BUTTON</m-button>
</template>
```

Attribute Description Type Optional Value Default Value

## API

| Attribute   | Description         | Type    | Optional Value                                        | Default Value |
| ----------- | ------------------- | ------- | ----------------------------------------------------- | ------------- |
| type        | Button Type         | string  | default/primary/danger/warning/success/text/link/info | default       |
| shape       | Button Shape        | string  | round/square/circle                                   | -             |
| size        | Button Size         | string  | large/small/mini                                      | small         |
| disabled    | Button Disabled     | boolean | -                                                     | false         |
| loading     | Loading Button      | boolean | -                                                     | false         |
| light       | Light Theme         | boolean | -                                                     | false         |
| Block       | full WIdth Button   | boolean | -                                                     | -             |
| icon        | Button Left Icon    | string  | -                                                     | -             |
| border      | Button Border       | boolean | -                                                     | true          |
| borderStyle | Button Border Style | boolean | -                                                     | solid         |

## Event

| event | Description                          | handle    |
| ----- | ------------------------------------ | --------- |
| click | Click the button to trigger an event | ()=> void |
| focus | Focus the button to trigger an event | ()=> void |
| blur  | Blur the button to trigger an event  | ()=> void |

## Theme variable

It will be used based on global variables, but of course, you can directly modify the variables in the current component to control the theme of your buttons

```scss
--m-primary-[number]: #0960fd;
--m-success-[number]: #0960fd;
--m-error-[number]: #0960fd;
--m-warning-[number]: #0960fd;
```
