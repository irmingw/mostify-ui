# 快速上手

在开始之前，推荐先学习 Vue3，并正确安装和配置了 Node.js v16 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue3 全家桶的正确开发方式。如果你刚开始学习前端或者 Vue3，将 UI 框架作为你的第一步可能不是最好的主意。

## 安装

使用 npm 工具安装 Mostify Ui，若安装缓慢，可尝试用 pnpm 或其他镜像源。

```bash
# npm 工具安装

npm install mostify-ui --save

# 使用 yarn 工具安装

yarn add mostify-ui

# 使用 cnpm 工具安装

cnpm install mostify-ui --save

# 使用 pnpm 工具安装

pnpm install mostify-ui --save

```

## 全局引入

在 main.js 中写入以下内容：

```js{4}
// main.js
import { createApp } from "vue";
import MostifyUI from "mostify-ui";
import "mostify-ui/dist/index.css";
import App from "./App.vue";
const app = createApp(App);
app.use(MostifyUI);
app.mount("#app");
```

## 开始使用

在 vue 文件中使用组件

```html
<!-- Home.vue -->
<template>
  <div id="app">
    <m-button>按钮</m-button>
  </div>
</template>
```

## 按需引入

```js{4}
// main.js
import { createApp } from "vue";
// 引入组件样式
import "mostify-ui/dist/index.css";
import App from "./App.vue";
const app = createApp(App);
app.mount("#app");
```
在 vue 文件中使用组件

```js{4}
<script setup>
  import { MButton } from "mostify-ui";
</script>

```
渲染到页面

```html
<!-- Home.vue -->
<template>
  <div id="app">
    <m-button>按钮</m-button>
  </div>
</template>
```
