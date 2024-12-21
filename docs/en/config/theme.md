# Theme Settings

Mostify UI uses CSS variables to control themes.
So you can change the theme by overriding CSS variables.

## Theme color

In Mostify UI, all colors are controlled through the following variables, which you can customize as needed.

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
  --m-action-50: rgba(0, 0, 0, 0.06);
  --m-action-100: rgba(0, 0, 0, 0.15);
  --m-action-200: rgba(0, 0, 0, 0.25);
  --m-action-300: rgba(0, 0, 0, 0.45);
  --m-disabled-100: rgba(0, 0, 0, 0.1);
  --m-disabled-200: rgba(0, 0, 0, 0.25);
  --m-disabled-300: rgba(0, 0, 0, 0.35);
  --m-disabled-400: rgba(0, 0, 0, 0.45);
}
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
