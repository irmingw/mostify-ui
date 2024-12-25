# 主题设置

Mostify UI 使用 css 变量来控制主题。
所以你可以通过覆盖 css 变量来改变主题。

## 主题色彩

在 Mostify UI 中，所有的色彩都是通过以下变量来控制的，你可以根据需要自定义这些变量。

```css
:root {
    --m-primary-100: #e3f2fd;
    --m-primary-200: #bbdefb;
    --m-primary-300: #64b5f6;
    --m-primary-400: #42a5f5;
    --m-primary-500: #2196f3;
    --m-primary-600: #1e88e5;
    --m-primary-700: #1976d2;
    --m-primary-800: #1565c0;
    --m-warning-100: #fff8e1;
    --m-warning-200: #ffecb3;
    --m-warning-300: #ffd54f;
    --m-warning-400: #ffca28;
    --m-warning-500: #ffc107;
    --m-warning-600: #ffb300;
    --m-warning-700: #ffa000;
    --m-warning-800: #ff8f00;
    --m-error-100: #fbe9e7;
    --m-error-200: #ffccbc;
    --m-error-300: #ff8a65;
    --m-error-400: #ff7043;
    --m-error-500: #ff5722;
    --m-error-600: #f4511e;
    --m-error-700: #e64a19;
    --m-error-800: #d84315;
    --m-success-100: #f1f8e9;
    --m-success-200: #dcedc8;
    --m-success-300: #aed581;
    --m-success-400: #9ccc65;
    --m-success-500: #8bc34a;
    --m-success-600: #7cb342;
    --m-success-700: #689f38;
    --m-success-800: #558b2f;

    --m-theme-50: #ffffff;
    --m-theme-100: #fafafa;
    --m-theme-200: #f5f5f5;
    --m-theme-300: #eeeeee;
    --m-theme-400: #bdbdbd;
    --m-theme-500: #9e9e9e;
    --m-theme-600: #757575;
    --m-theme-700: #616161;
    --m-theme-800: #424242;
    --m-theme-900: #212121;
    --m-theme-1000: #111;
    --m-theme-bg: #fff;
    --m-rgba-50: rgba(0, 0, 0, .06);
    --m-rgba-100: rgba(0, 0, 0, .12);
    --m-rgba-200: rgba(0, 0, 0, .24);
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
