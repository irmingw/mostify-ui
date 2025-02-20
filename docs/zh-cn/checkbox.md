<script setup lang="ts">
import { ref, watch } from "vue";

const checked = ref(false);
const cars = ref(["Volvo", "Saab", "Mercedes", "Audi"]);
const selectedCars = ref(["Volvo", "Mercedes"]);
const indeterminate = ref(true);
const checkAll = ref(false);

const onCheckAllChange = (checked) => {
  checkAll.value = checked;
  selectedCars.value = checked ? cars.value : [];
};

watch(selectedCars, (val) => {
  if (val.length === cars.value.length) {
    indeterminate.value = false;
    checkAll.value = true;
  } else if (val.length === 0) {
    indeterminate.value = false;
    checkAll.value = false;
  } else {
    indeterminate.value = true;
    checkAll.value = false;
  }
});
</script>

# 多选框

MCheckbox是一个复选框组件，用于提供多选功能。用户可以通过单击复选框来选择或取消选择选项。

## 基本用法

<m-checkbox v-model="checked"> CHECKBOX </m-checkbox>
<m-checkbox v-model="checked" label="CHECKBOX" />

```js
<script setup>
    import { ref } from 'vue'
    const checked = ref(false);
</script>

<template>
  <m-checkbox v-model="checked"> CHECKBOX </m-checkbox>
  <m-checkbox v-model="checked" label="CHECKBOX" />
</template>

```

## 多选组模式

<m-checkbox
  v-model="checkAll"
  @change="onCheckAllChange"
  :indeterminate="indeterminate"
  >All Selected</m-checkbox
>
  <div>You selected: {{ selectedCars }}</div>
  <m-checkbox v-model="selectedCars" v-for="item in cars" :value="item" :label="item" />

  ```vue
<script setup>
  import { ref, watch } from "vue";
  const cars = ref(["Volvo", "Saab", "Mercedes", "Audi"]);
  const selectedCars = ref(["Volvo", "Mercedes"]);
  const indeterminate = ref(true);
  const checkAll = ref(false);

  const onCheckAllChange = (checked) => {
    checkAll.value = checked;
    selectedCars.value = checked ? cars.value : [];
  };

  watch(selectedCars, (val) => {
    if (val.length === cars.value.length) {
      indeterminate.value = false;
      checkAll.value = true;
    } else if (val.length === 0) {
      indeterminate.value = false;
      checkAll.value = false;
    } else {
      indeterminate.value = true;
      checkAll.value = false;
    }
  });
</script>

```

```html
<template>
  <m-checkbox
  v-model="checkAll"
  @change="onCheckAllChange"
  :indeterminate="indeterminate"
  >All Selected</m-checkbox
>
  <div>You selected: {{ selectedCars }}</div>
  <m-checkbox v-model="selectedCars" v-for="item in cars" :value="item" :label="item" />
</template>

```

## 禁用

<m-checkbox v-model="checked" disabled> CHECKBOX </m-checkbox>
<m-checkbox v-model="checked" label="CHECKBOX" disabled />

```html
<template>
  <m-checkbox v-model="checked" disabled> CHECKBOX </m-checkbox>
  <m-checkbox v-model="checked" label="CHECKBOX" disabled />
</template>
```

## Size

<m-checkbox v-model="checked" size="mini"> CHECKBOX </m-checkbox>
<m-checkbox v-model="checked" label="CHECKBOX" size="small" />
<m-checkbox v-model="checked" label="CHECKBOX" size="large" />

```html
<template>
  <m-checkbox v-model="checked" size="mini"> CHECKBOX </m-checkbox>
  <m-checkbox v-model="checked" label="CHECKBOX" size="small" />
  <m-checkbox v-model="checked" label="CHECKBOX" size="large" />
</template>
```

## API

有关更多信息，请参阅API文档。

| 属性 | 描述                              | 类型    | 默认值 |
| -------- | --------------------------- | ------- | ------- |
| checked  | whether the checkbox is selected         | boolean | false   |
| modelValue | binding value                          | boolean / string / number / any[]  | -       |
| value    | the value of the checkbox                | boolean / string / number         | -       |
| disabled | whether the checkbox is disabled          | boolean                           | false   |
| size     | the size of the checkbox                | `small` `large` `mini`   | small  |

## Events

| Event Name | 描述                              | Parameters           |
| ---------- | --------------------------- | ------------------ |
| change     | triggers when the checkbox is selected or deselected  | (checked: boolean) |
