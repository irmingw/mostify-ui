<script setup>
import { ref } from 'vue'

const str = ref('Hello world!')

</script>

# Textarea

Resizable for entering multiple lines of text information.

## Basic usage

<m-textarea v-model="str"  />

```vue
<script setup>
  import { ref } from 'vue'

  const str = ref('Hello world!')
</script>

<template>
  <m-textarea v-model="str"  />
</template>

```

## Disabled

The `disabled` attribute accepts a `boolean`

<m-textarea v-model="str" :disabled="true" />

```vue
<template>
  <m-textarea v-model="str" :disabled="true" />
</template>
```

## Readonly

The `readonly` attribute accepts a `boolean`

<m-textarea v-model="str" :readonly="true" />

```vue
<template>
  <m-textarea v-model="str" :readonly="true" />
</template>
```

## API

| Property | Description                   | Type    | Default |
| -------- | --------------------------- | ------- | ------- |
| v-model  | Binding value               | string  | -       |
| value  | Binding value               | string  | -       |
| placeholder | Placeholder text          | string  | -       |
| disabled | Disabled state of input box | boolean | false   |
| readonly | Readonly state of input box | boolean | false   |
| maxlength | Maximum length of input box | number  | -       |
| minlength | Minimum length of input box | number  | -       |

## Events

| Event Name | Description                   | Parameters    |
| ---------- | --------------------------- | ------------- |
| change     | Triggered when the value changes | (value: string) |
| focus      | Triggered when the input box gets focus | (event: Event)  |
| blur       | Triggered when the input box loses focus | (event: Event)  |
