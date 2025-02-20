# Input

Input input box component, used for users to input text information.

## Basic usage

<m-input v-model="msg" placeholder="Please enter text"></m-input>

<script setup>
    import { ref } from 'vue'
    const msg = ref('')
</script>

```js
<script setup>
    import { ref } from 'vue'
    const msg = ref('')
</script>

<template>
  <m-input v-model="msg" placeholder="Please enter text"></m-input>
</template>

```

## Prefix Suffix

Prefix
<m-input v-model="msg" placeholder="Please enter text" prefix="Prefix"></m-input>

Suffix
<m-input v-model="msg" placeholder="Please enter text" suffix="suffix"></m-input>

```js
<template>
    <m-input v-model="msg" placeholder="Please enter text" prefix="Prefix"></m-input>
    <m-input v-model="msg" placeholder="Please enter text" suffix="suffix"></m-input>
</template>

```

## Prepend Append

prepend
<m-input v-model="msg" placeholder="Please enter text" prepend="prepend"></m-input>

append
<m-input v-model="msg" placeholder="Please enter text" append="append"></m-input>

```js
<template>
    <m-input v-model="msg" placeholder="Please enter text" prepend="prepend"></m-input>
    <m-input v-model="msg" placeholder="Please enter text" append="append"></m-input>
</template>

```

## Disabled

<m-input v-model="msg" placeholder="Please enter text" disabled></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="Please enter text" disabled></m-input>
</template>

```

## Readonly

<m-input v-model="msg" placeholder="Please enter text" readonly></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="Please enter text" readonly></m-input>
</template>
```

## Size

Size values: `mini`、`small`、`large`, Default `small`
<m-input v-model="msg" placeholder="Please enter text" size="large"></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="Please enter text" size="large"></m-input>
</template>
```

## Clearable

<m-input v-model="msg" placeholder="Please enter text" clearable></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="Please enter text" clearable></m-input>
</template>
```

## Password

<m-input v-model="msg" type="password" showPasswordIcon placeholder="Please enter text" show-password></m-input>

```js
<template>
   <m-input v-model="msg" type="password" showPasswordIcon placeholder="Please enter text" show-password></m-input>
</template>
```

## Limit Count

<m-input v-model="msg" placeholder="Please enter text" :maxlength="10" showLimitCount></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="Please enter text" :maxlength="10" showLimitCount></m-input>
</template>
```

## API
| Property | Description                   | Type    | Default |
| -------- | --------------------------- | ------- | ------- |
| v-model  | Binding value               | string  | -       |
| value  | Binding value               | string  | -       |
| type     | Input box type             | string  | text    |
| placeholder | Placeholder text          | string  | -       |
| disabled | Disabled state of input box | boolean | false   |
| readonly | Readonly state of input box | boolean | false   |
| size    | Size of input box, optional values: `mini`、`small`、`large` | string | small   |
| showPasswordIcon | Show password icon | boolean | false   |
| showLimitCount | Show limit count | boolean | false   |
| maxLength | Maximum number of characters allowed | number | -       |
| prepend | Prepend slot | string  | -       |
| append | Append slot | string  | -       |
| prefix | Prefix slot | string  | -       |
| suffix | Suffix slot | string  | -       |
| clearable | Whether to show the clear button | boolean | false   |


## Events

| Event Name | Description                   | Parameters    |
| ---------- | --------------------------- | ------------- |
| change     | Triggered when the value changes | (value: string) |
| focus      | Triggered when the input box gets focus | (event: Event)  |
| blur       | Triggered when the input box loses focus | (event: Event)  |

## Slots

| Name | Description    |
| ---- | ------------- |
| prepend | Prepend slot |
| append | Append slot   |
| prefix | Prefix slot   |
| suffix | Suffix slot   |