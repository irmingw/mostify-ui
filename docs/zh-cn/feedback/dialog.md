# 对话框

对话框是一个特殊的弹出层，可以用来提示用户信息、请求用户反馈或者展示一些内容。或者用来请求用户输入一些信息。
弹出层组件的层级高于普通元素，并且可以覆盖在普通元素上。


## 使用

在单文件组件中使用对话框组件

<script setup>
  import {ref} from 'vue'

  const visible = ref(false)
</script>

<m-dialog :visible="visible" title="标题" @close="visible = false">
  这个是对话框组件
</m-dialog>
<m-button @click="visible = true" type="primary">打开对话框</m-button>

```js
<script setup>
  import {ref} from 'vue'

  const visible = ref(false)
</script>

```


```html
<template>
  <m-dialog :visible="visible" title="标题" @close="visible = false">
    这个是对话框组件
  </m-dialog>
  <m-button @click="visible = true" type="primary">打开对话框</m-button>
</template>
```
