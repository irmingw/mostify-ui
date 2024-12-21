# 图标 Icons

图标组件是一系列图标集合，系统会提供一部分基础图标，图标需要单独安装

## 安装图标

```bash
npm install mostify-ui-icon --save
```

## 全局引入

```js
// main.js
import Vue from "vue";
import MostifyIcon from "mostify-ui-icon";
import App from "./App.vue";

const app = Vue.createApp(App);
app.use(MostifyIcon);
```

## 使用图标

```html
<template>
  <m-icon name="close" size="20px" />
</template>
```

## 图标列表

<script setup>
import iconList from "../../json/iconfont.json";
  </script>
<div class="icon_list_demo">
      <section class="item" v-for="item in iconList.glyphs" :key="item.name">
          <m-icon :name="item.name" size="36px"></m-icon>
          <span>{{item.name}}</span>
      </section>
</div>

<style scoped lang="scss">
  .icon_list_demo {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 4px;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 120px;
      height: 80px;
      font-size: 14px;
      border-radius: 4px;
      padding: 16px 8px;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        background-color: var(--m-primary-200);
        color: var(--m-primary-600);
        font-weight: bold;
      }
    }
  }
  </style>
