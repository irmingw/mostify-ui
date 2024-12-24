# 主题设置

Mostify UI 使用 css 变量来控制主题。
所以你可以通过覆盖 css 变量来改变主题。

## 主题色彩

在 Mostify UI 中，所有的色彩都是通过以下变量来控制的，你可以根据需要自定义这些变量。

```css
:root {
  --m-primary-100: #ebf8ff;
  --m-primary-200: #c2e9ff;
  --m-primary-300: #94d0f7;
  --m-primary-400: #67b2eb;
  --m-primary-500: #3e93de;
  --m-primary-600: #1976d2;
  --m-primary-700: #0c56ab;
  --m-primary-800: #033b85;
  --m-warning-100: #fff9e6;
  --m-warning-200: #ffedba;
  --m-warning-300: #ffde91;
  --m-warning-400: #ffcd69;
  --m-warning-500: #ffb940;
  --m-warning-600: #f29a15;
  --m-warning-700: #cc7708;
  --m-warning-800: #a65800;
  --m-error-100: #ffe6ea;
  --m-error-200: #fad3dc;
  --m-error-300: #ff7a9c;
  --m-error-400: #f54e7e;
  --m-error-500: #e82563;
  --m-error-600: #dc004e;
  --m-error-700: #b50045;
  --m-error-800: #8f003b;
  --m-success-100: #f2fff0;
  --m-success-200: #e4f8e3;
  --m-success-300: #c5f2c2;
  --m-success-400: #96e693;
  --m-success-500: #68d968;
  --m-success-600: #41cc45;
  --m-success-700: #2da635;
  --m-success-800: #1c8026;
  --m-theme-50: #ffffff;
  --m-theme-100: #fafafa;
  --m-theme-200: #f5f5f5;
  --m-theme-300: #f0f0f0;
  --m-theme-400: #d9d9d9;
  --m-theme-500: #bfbfbf;
  --m-theme-600: #8c8c8c;
  --m-theme-700: #595959;
  --m-theme-800: #434343;
  --m-theme-900: #262626;
  --m-rgba-50: rgba(0, 0, 0, .05);
  --m-rgba-100: rgba(0, 0, 0, .15);
  --m-rgba-200: rgba(0, 0, 0, .25);
  --m-rgba-300: rgba(0, 0, 0, .35);
  --m-rgba-400: rgba(0, 0, 0, .45);
  --m-rgba-500: rgba(0, 0, 0, .55);
  --m-rgba-600: rgba(0, 0, 0, .65);
  --m-rgba-700: rgba(0, 0, 0, .75);
  --m-rgba-800: rgba(0, 0, 0, .85);
  --m-rgba-900: rgba(0, 0, 0, .95);
}
```

## 组件中修改主题

Mostify UI 使用 css 变量来控制主题。所以你可以通过覆盖 css 变量来改变主题。

```html
<template>
  <m-button class="reset_button">Button</m-button>
</template>

<style scoped>
  .reset_button {
    --m-primary-600: red;
  }
</style>
```
