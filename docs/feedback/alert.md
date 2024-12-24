# Alert

Alert components are used to display important notifications or warning messages on a page. They are typically used to inform users about the results of certain actions or to draw attention to important information.

## Usage

The `MAlert` component can display a simple warning or notification message on the page.

<MAlert>Hello Alert</MAlert>

```html
<template>
    <MAlert>Hello Alert</MAlert>
</template>
```

## Type

The `type` attribute allows you to specify the type of alert to display. The available types are `success`, `primary`, `warning`, and `danger`.

<MAlert type="success">Success Alert</MAlert>
<MAlert type="primary">Primary Alert</MAlert>
<MAlert type="warning">Warning Alert</MAlert>
<MAlert type="danger">Error Alert</MAlert>

```html
<template>
  <MAlert type="success">Success Alert</MAlert>
  <MAlert type="primary">Primary Alert</MAlert>
  <MAlert type="warning">Warning Alert</MAlert>
  <MAlert type="danger">Danger Alert</MAlert>
</template>
```



## Show Icon

By setting the `showIcon` property, an icon can be displayed in the warning message.

<MAlert showIcon>Hello Alert</MAlert>

```html
<template>
    <MAlert showIcon>Hello Alert</MAlert>
</template>
```

## Custom Icon

The `icon` attribute allows you to customize the icon. You can use either a slot or an attribute to achieve this.

<MAlert showIcon icon="close">Hello Alert</MAlert>

```html
<template>
    <MAlert showIcon icon="close">Hello Alert</MAlert>
</template>
```

## Display Title

By setting the `title` property or using a slot, you can display a title.

<MAlert title="Warning Title">Hello Alert</MAlert>

```html
<template>
  <MAlert title="Warning Title">Hello Alert</MAlert>
</template>
```

Using a slot to set the title:

```html
<template>
  <MAlert>
    <template #title>
      Warning Title
    </template>
    Hello Alert
  </MAlert>
</template>
```

## Show Close Icon

By setting the `showClose` property, a close icon can be displayed, allowing users to dismiss the alert.

<MAlert showClose>Hello Alert</MAlert>

```html
<template>
  <MAlert showClose>Hello Alert</MAlert>
</template>
```

## API

### Alert Component

The `Alert` component is used to display important messages to the user. It can be used to show success, error, warning, or informational messages.

#### Props

| Name     | Type     | Description                                              | Default |
|----------|----------|----------------------------------------------------------|---------|
| `type`   | string   | The type of alert to display. Possible values are `success`, `error`, `warning`, and `info`. | -       |
| `title`| string   | The title to display inside the alert.                 | -       |
| `closable`| boolean | If true, the alert can be closed by the user.            | false   |
| `close`| function | Callback function that is called when the alert is closed.| -       |

#### Example

```html
<template>
  <Alert type="success" title="This is a success alert" closable @close="handleClose" />
</template>

<script>
export default {
  methods: {
    handleClose() {
      console.log('Alert closed');
    }
  }
}
</script>
```

