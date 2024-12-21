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

## Size

Size values: `mini`、`small`、`large`, Default `small`
<m-input v-model="msg" placeholder="Please enter text" size="small"></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="Please enter text" size="small"></m-input>
</template>
```

## Clearable

<m-input v-model="msg" placeholder="Please enter text" clearable></m-input>

```js
<template>
   <m-input v-model="msg" placeholder="Please enter text" clearable></m-input>
</template>
```
