# 输入框 Input

Input 输入框组件, 用于用户录入文本信息。

## 基础使用

<m-input v-model="msg" placeholder="请输入文本"></m-input>

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
  <m-input v-model="msg" placeholder="请输入文本"></m-input>
</template>

```

## 前缀后缀

prefix
<m-input v-model="msg" placeholder="请输入文本" prefix="Prefix"></m-input>

suffix
<m-input v-model="msg" placeholder="请输入文本" suffix="suffix"></m-input>

```js
<template>
    <m-input v-model="msg" placeholder="请输入文本" prefix="Prefix"></m-input>
    <m-input v-model="msg" placeholder="请输入文本" suffix="suffix"></m-input>
</template>

```

## 前置后置内容

prepend
<m-input v-model="msg" placeholder="请输入文本" prepend="prepend"></m-input>

append
<m-input v-model="msg" placeholder="请输入文本" append="append"></m-input>

```js
<template>
    <m-input v-model="msg" placeholder="请输入文本" prepend="prepend"></m-input>
    <m-input v-model="msg" placeholder="请输入文本" append="append"></m-input>
</template>

```

## 禁用状态

disabled: 是否禁用状态
<m-input v-model="msg" placeholder="请输入文本" disabled></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="请输入文本" disabled></m-input>
</template>

```

## 输入框尺寸

size: 输入框尺寸, 可选值: `mini`、`small`、`large`, 默认值为 `small`
<m-input v-model="msg" placeholder="请输入文本" size="small"></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="请输入文本" size="small"></m-input>
</template>
```

## 允许清除

clearable: 是否允许清除内容

<m-input v-model="msg" placeholder="请输入文本" clearable></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="请输入文本" clearable></m-input>
</template>
```
