# theme settings

Mostify UI uses CSS variables to control themes.
So you can change the theme by overriding CSS variables.

## Theme color

In Mostify UI, all colors are controlled through the following variables, which you can customize as needed.

<m-alert iconSize="20px" title="Tip">
  The color values here are global variables. You can customize these colors according to your needs. Or redefine color values within the component.
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

## Auxiliary Theme Colors

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

## Size theme

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

## Dark Theme

This component supports dark themes, and you can enable them in the following ways.

```html
<html class="dark"></html>
```

```html
<html date-theme="dark"></html>
```

Or dynamically add the 'dark' class in JavaScript.

```js
document.documentElement.classList.add('dark');
```


## Modify the theme in the component

Mostify UI uses CSS variables to control themes. So you can change the theme by overriding CSS variables.

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
