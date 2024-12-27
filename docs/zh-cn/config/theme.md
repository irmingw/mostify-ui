# 主题设置

Mostify UI 使用 css 变量来控制主题。
所以你可以通过覆盖 css 变量来改变主题。

## 主题色彩

在 Mostify UI 中，所有的色彩都是通过以下变量来控制的，你可以根据需要自定义这些变量。

<m-alert iconSize="20px" title="提示">
  这里的色彩值为全局变量。你可以根据需要自定义这些颜色。或者在组件内部重新定义色彩值。
</m-alert>

```css
:root {
    --m-primary-50: #E6F1FE;
    --m-primary-100: #CCE3FD;
    --m-primary-200: #99C7FB;
    --m-primary-300: #66AAF9;
    --m-primary-400: #338EF7;
    --m-primary-500: #006FEE;
    --m-primary-600: #005BC4;
    --m-primary-700: #004493;
    --m-primary-800: #002E62;
    --m-primary-900: #001731;
    --m-warning-50: #FEFCE8;
    --m-warning-100: #FDEDD3;
    --m-warning-200: #FBDBA7;
    --m-warning-300: #F9C97C;
    --m-warning-400: #F7B750;
    --m-warning-500: #F5A524;
    --m-warning-600: #C4841D;
    --m-warning-700: #936316;
    --m-warning-800: #62420E;
    --m-warning-900: #312107;
    --m-error-50: #fee7ef;
    --m-error-100: #fdd0df;
    --m-error-200: #faa0bf;
    --m-error-300: #f871a0;
    --m-error-400: #f54180;
    --m-error-500: #f31260;
    --m-error-600: #c20e4d;
    --m-error-700: #920b3a;
    --m-error-800: #610726;
    --m-error-900: #310413;
    --m-success-50: #E8FAF0;
    --m-success-100: #D1F4E0;
    --m-success-200: #A2E9C1;
    --m-success-300: #74DFA2;
    --m-success-400: #45D483;
    --m-success-500: #17C964;
    --m-success-600: #12A150;
    --m-success-700: #0E793C;
    --m-success-800: #095028;
    --m-success-900: #052814;
}
```

## 辅助主题色彩

```css
:root {
    --m-theme-50: #ffffff;
    --m-theme-100: #FAFAFA;
    --m-theme-200: #F4F4F5;
    --m-theme-300: #E4E4E7;
    --m-theme-400: #D4D4D8;
    --m-theme-500: #A1A1AA;
    --m-theme-600: #71717A;
    --m-theme-700: #52525B;
    --m-theme-800: #3F3F46;
    --m-theme-900: #27272A;
    --m-theme-1000: #18181B;
    --m-theme-bg: #fff;
    --m-theme-container: #f6f6f6;
    --m-rgba-50: rgba(0, 0, 0, .05);
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

## 尺寸主题

```css
:root {
    --m-size-small: 36px;
    --m-size-large: 42px;
    --m-size-mini: 28px;
    --m-radius-small: 4px;
    --m-radius-middle: 8px;
    --m-radius-large: 16px;
    --m-radius-circle: 50%;
}
```

## 暗黑主题

本组件支持暗黑主题，你可以通过以下方式来启用暗黑主题。

```html
<html class="dark"></html>
```

```html
<html date-theme="dark"></html>
```

或者在 JavaScript 中动态添加 `dark` 类。

```js
document.documentElement.classList.add('dark');
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
