# Dialog

A dialog box is a special pop-up layer that can be used to prompt users for information, request user feedback, or display some content. Or used to request users to input some information.
The level of pop-up layer components is higher than that of regular elements and can be overlaid on top of regular elements.


## Useage

Using dialog box components in single file components

<script setup>
  import {ref} from 'vue'

  const visible = ref(false)
</script>

<m-dialog :visible="visible" title="Title Text" @close="visible = false">
  This is a dialog box component
</m-dialog>
<m-button @click="visible = true" type="primary">open a dialog box</m-button>

```js
<script setup>
  import {ref} from 'vue'

  const visible = ref(false)
</script>

```


```html
<template>
  <m-dialog :visible="visible" title="Title Text" @close="visible = false">
    This is a dialog box component
  </m-dialog>
  <m-button @click="visible = true" type="primary">open a dialog box</m-button>
</template>
```
