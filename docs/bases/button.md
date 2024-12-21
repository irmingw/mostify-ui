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

<MAlert>Button Support water ripple effect, making the feedback effect more obvious</MAlert>

## Button Type

Ensure that your components have been installed and imported, see [Quick Start](/zh-cn/config/start.html) for details. If you have already installed and imported the components, you can start using them now

Type rendering effect:

<div class="button_test">
  <m-button type="default">TEST_BUTTON</m-button>
  <m-button type="primary">TEST_BUTTON</m-button>
  <m-button type="danger">TEST_BUTTON</m-button>
  <m-button type="warning">TEST_BUTTON</m-button>
  <m-button type="success">TEST_BUTTON</m-button>
  <m-button type="text">TEST_BUTTON</m-button>
  <m-button type="link">TEST_BUTTON</m-button>
</div>

```html
<template>
  <m-button type="default">TEST_BUTTON</m-button>
  <m-button type="primary">TEST_BUTTON</m-button>
  <m-button type="danger">TEST_BUTTON</m-button>
  <m-button type="warning">TEST_BUTTON</m-button>
  <m-button type="success">TEST_BUTTON</m-button>
  <m-button type="text">TEST_BUTTON</m-button>
  <m-button type="link">TEST_BUTTON</m-button>
</template>
```

## Button Shape

Note: The circular and square buttons in the shape attribute will control the width and height equally, and the round will automatically expand according to the content.

Shape rendering effect:

<div class="button_test">
  <m-button shape="round" type="danger">Shape Button</m-button>
  <m-button shape="square" type="success">M</m-button>
  <m-button shape="circle" type="primary">M</m-button>
  <m-button shape="circle" type="link">M</m-button>
</div>

```html
<template>
  <m-button shape="round" type="danger">Shape Button</m-button>
  <m-button shape="square" type="success">M</m-button>
  <m-button shape="circle" type="primary">M</m-button>
  <m-button shape="circle" type="link">M</m-button>
</template>
```

## Button Size

Size rendering effect:

<div class="button_test">
  <m-button size="large" type="primary">Large Button</m-button>
  <m-button size="small" type="danger">Small Button</m-button>
  <m-button size="mini" type="success">Mini Button</m-button>
</div>

```html
<template>
  <m-button size="large" type="primary">Large Button</m-button>
  <m-button size="small" type="danger">Small Button</m-button>
  <m-button size="mini" type="success">Mini Button</m-button>
</template>
```

## Button Status

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

Attribute Description Type Optional Value Default Value

## API

| Attribute | Description | Type    | Optional Value                                   | Default Value |
| --------- | ----------- | ------- | ------------------------------------------------ | ------------- |
| type      | 按钮类型    | string  | default/primary/danger/warning/success/text/link | default       |
| shape     | 按钮形状    | string  | round/square/circle                              | -             |
| size      | 按钮大小    | string  | large/small/mini                                 | small         |
| disabled  | 禁用按钮    | boolean | -                                                | false         |
| loading   | 加载中      | boolean | -                                                | false         |
| light     | 浅色主题    | boolean | -                                                | false         |

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
