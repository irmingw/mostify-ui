# About Mostify UI

Mostify UI is a Vue component library that provides developers with a robust set of components for building user interfaces. It includes a wide range of components such as buttons, inputs, tables, and more, making it easy to create complex interfaces with minimal effort.

## Features

- **Well-Designed:** Adhere to ergonomic principles and create the ultimate user experience.
- **Flexible Design:** Mostify UI provides a wide range of components that can be customized to fit your specific needs. You can modify the look and feel of each component to create an interface that perfectly suits your branding.
- **Easy to use:** The operation is intuitive and convenient, immediately embarking on an efficient development journey.
- **Flexible Expansion:** Highly customizable to easily meet various development needs.

## How to Use Mostify UI

### Quick Start

Before you start, it is recommended to learn Vue3 first and install and configure Node.js v16 or above correctly. The official guide assumes that you already have intermediate knowledge of HTML, CSS, and JavaScript and have fully mastered the correct development method of the Vue3 ecosystem. If you are just starting to learn frontend development or Vue3, using a UI framework as your first step may not be the best idea.

### Installation

Use the npm tool to install Mostify Ui. If the installation is slow, you can try using pnpm or other image sources.

```bash
# npm

npm install mostify-ui --save

# yarn

yarn add mostify-ui

# cnpm

cnpm install mostify-ui --save

# pnpm

pnpm install mostify-ui --save

```

### Global Introduction

Write the following content in main.exe:

```js
// main.js
import { createApp } from "vue";
import MostifyUI from "mostify-ui";
import "mostify-ui/dist/index.css";
import App from "./App.vue";
const app = createApp(App);
app.use(MostifyUI);
app.mount("#app");
```

### Start using

Using Components in Vue Files

```html
<!-- Home.vue -->
<template>
  <div id="app">
    <m-button>BUTTON</m-button>
  </div>
</template>
```

### On demand introduction

```js
// main.js
import { createApp } from "vue";
// 引入组件样式
import "mostify-ui/dist/index.css";
import App from "./App.vue";
const app = createApp(App);
app.mount("#app");
```

Using Components in Vue Files

```js
<script setup>
  import { MButton } from "mostify-ui";
</script>

```

Rendering to page

```html
<!-- Home.vue -->
<template>
  <div id="app">
    <m-button>BUTTON</m-button>
  </div>
</template>
```

### Conclusion

Mostify UI is a powerful Vue component library that provides developers with a robust set of components for building user interfaces. With its high performance, flexible design, customizable themes, and accessibility support, it makes it easy to create complex interfaces with minimal effort. Whether you're looking for a simple button or a complex table, Mostify UI has something for everyone.

## Homepage

You Can See Detail Docs At
[Mostify UI](https://irmingw.github.io/mostify-ui/)
