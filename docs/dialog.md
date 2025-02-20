# Dialog

A dialog box is a special pop-up layer that can be used to prompt users for information, request user feedback, or display some content. Or used to request users to input some information.
The level of pop-up layer components is higher than that of regular elements and can be overlaid on top of regular elements.

## Useage

Using dialog box components in single file components

<script setup>
  import {ref} from 'vue'

  const visible = ref(false)
  const show = ref(false)
  const open = ref(false);
  const open2 = ref(false);
  const open3 = ref(false);
  const open4 = ref(false);
  const op5 = ref(false);
</script>

<m-dialog v-model="visible" title="Title Text" width="80%">
  This is a dialog box component
  <template #footer>
      <div style="display:flex;justify-content:flex-end;align-items:center;gap:12px;">
        <m-button @click="visible = false">Cancel</m-button>
        <m-button type="primary" @click="visible = false">
          Confirm
        </m-button>
      </div>
    </template>
</m-dialog>
<m-button @click="visible = true" type="primary">Open Dialog</m-button>

```js
<script setup>import {ref} from 'vue' const visible = ref(false)</script>
```

```html
<template>
  <m-dialog v-model="visible" title="Title Text" width="75%">
    This is a dialog box component
    <template #footer>
      <div
        style="display:flex;justify-content:flex-end;align-items:center;gap:12px;">
        <m-button @click="visible = false">Cancel</m-button>
        <m-button type="primary" @click="visible = false"> Confirm </m-button>
      </div>
    </template>
  </m-dialog>
  <m-button @click="visible = true" type="primary">Open Dialog</m-button>
</template>
```

<MAlert type="primary" title="Note">Welcome to experience the dialogue box </MAlert>

## Custom Content

The content of a dialog box can be anything, even a table or form. This example shows how to use Mostify UI tables and forms in a dialog.


<m-button @click="open = true">OPEN</m-button>
<m-dialog v-model="open" title="Hello Notes" top="80px" width="70%" closeIcon>
  The header slot can be used to customize the area where the title is displayed. In
  order to maintain accessibility, use the title attribute in addition to using this
  slot, or use the titleId slot property to specify which element should be read out
  as the dialog title.
</m-dialog>


```html
<template>
  <m-button @click="open = true">OPEN</m-button>
<m-dialog v-model="open" title="Hello Notes" top="80px" width="70%" closeIcon>
  The header slot can be used to customize the area where the title is displayed. In
  order to maintain accessibility, use the title attribute in addition to using this
  slot, or use the titleId slot property to specify which element should be read out
  as the dialog title.
</m-dialog>
</template>
```

<m-button @click="open3 = true">Has Child</m-button>
<m-dialog v-model="open3" title="Title" center closeIcon escapeClose>
  <div>
    <div style="width: 100%; background: #f6f6f6">
      The header slot can be used to customize the area where the title is displayed.
      In order to maintain accessibility, use the title attribute in addition to using
      this slot, or use the titleId slot property to specify which element should be
      read out as the dialog title.
    </div>
    <m-button @click="op5 = true">OPen Child Dialog</m-button>
    <m-dialog v-model="op5" title="Child" center closeIcon escapeClose>
      <div>
        <div>
          The header slot can be used to customize the area where the title is
          displayed. In order to maintain accessibility, use the title attribute in
          addition to using this slot, or use the titleId slot property to specify
          which element should be read out as the dialog title.
        </div>
      </div>
    </m-dialog>
  </div>
</m-dialog>


```html
<template>
  <m-button @click="open3 = true">Has Child</m-button>
    <m-dialog v-model="open3" title="Title" center closeIcon escapeClose>
      <div>
        <div style="width: 100%; background: #f6f6f6">
          The header slot can be used to customize the area where the title is displayed.
          In order to maintain accessibility, use the title attribute in addition to using
          this slot, or use the titleId slot property to specify which element should be
          read out as the dialog title.
        </div>
        <m-button @click="op5 = true">OPen Child Dialog</m-button>
        <m-dialog v-model="op5" title="Child" center closeIcon escapeClose>
          <div>
            <div>
              The header slot can be used to customize the area where the title is
              displayed. In order to maintain accessibility, use the title attribute in
              addition to using this slot, or use the titleId slot property to specify
              which element should be read out as the dialog title.
            </div>
          </div>
        </m-dialog>
      </div>
    </m-dialog>
</template>
```


<m-button @click="open4 = true">fullscreen</m-button>
<m-dialog v-model="open4" title="Fullscreen" fullscreen closeIcon>
  <div
    style="
      height: 1000px;
      background: #0f0f0f;
      color: #fff;
      padding: 12px;
      border-radius: 16px;
    "
  >
    <div>
      The header slot can be used to customize the area where the title is displayed.
      In order to maintain accessibility, use the title attribute in addition to using
      this slot, or use the titleId slot property to specify which element should be
      read out as the dialog title.
    </div>
  </div>
</m-dialog>

```html
<template>
<m-button @click="open4 = true">fullscreen</m-button>
<m-dialog v-model="open4" title="Fullscreen" fullscreen closeIcon>
  <div
    style="
      height: 1000px;
      background: #0f0f0f;
      color: #fff;
      padding: 12px;
      border-radius: 16px;
    "
  >
    <div>
      The header slot can be used to customize the area where the title is displayed.
      In order to maintain accessibility, use the title attribute in addition to using
      this slot, or use the titleId slot property to specify which element should be
      read out as the dialog title.
    </div>
  </div>
</m-dialog>
</template>

```