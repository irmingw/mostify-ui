# Input

输入框组件，用于用户输入文本信息。

## 基础用法

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

## 前缀与后缀

<m-input v-model="msg" placeholder="Please enter text" prefix="Prefix"></m-input>
<m-input v-model="msg" placeholder="Please enter text" suffix="suffix"></m-input>

```js
<template>
    <m-input v-model="msg" placeholder="Please enter text" prefix="Prefix"></m-input>
    <m-input v-model="msg" placeholder="Please enter text" suffix="suffix"></m-input>
</template>

```

## 前置内容与后置内容

<m-input v-model="msg" placeholder="Please enter text" prepend="prepend"></m-input>
<m-input v-model="msg" placeholder="Please enter text" append="append"></m-input>

```js
<template>
    <m-input v-model="msg" placeholder="Please enter text" prepend="prepend"></m-input>
    <m-input v-model="msg" placeholder="Please enter text" append="append"></m-input>
</template>

```

## 禁用状态

<m-input v-model="msg" placeholder="Please enter text" disabled></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="Please enter text" disabled></m-input>
</template>

```

## 只读状态

<m-input v-model="msg" placeholder="Please enter text" readonly></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="Please enter text" readonly></m-input>
</template>
```

## 尺寸

尺寸取值: `mini`、`small`、`large`, Default `small`
<m-input v-model="msg" placeholder="Please enter text" size="large"></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="Please enter text" size="large"></m-input>
</template>
```

## 可清除功能

<m-input v-model="msg" placeholder="Please enter text" clearable></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="Please enter text" clearable></m-input>
</template>
```

## 密码类型

<m-input v-model="msg" type="password" showPasswordIcon placeholder="Please enter text" show-password></m-input>

```js
<template>
   <m-input v-model="msg" type="password" showPasswordIcon placeholder="Please enter text" show-password></m-input>
</template>
```

## 字符限制数量

<m-input v-model="msg" placeholder="Please enter text" :maxlength="10" showLimitCount></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="Please enter text" :maxlength="10" showLimitCount></m-input>
</template>
```

## API

| Property | Description                   | Type    | Default |
| -------- | --------------------------- | ------- | ------- |
| v-model  |绑定的值               | string  | -       |
| value  |绑定的值               | string  | -       |
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
