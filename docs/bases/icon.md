# Icons

Icon components are a collection of icons, and the system provides some basic icons that need to be installed separately

## Installation icon

```bash
npm install mostify-ui-icon --save
```

## Global Introduction

```js
// main.js
import Vue from "vue";
import MostifyIcon from "mostify-ui-icon";
import App from "./App.vue";

const app = Vue.createApp(App);
app.use(MostifyIcon);
```

## Use Icons

```html
<template>
  <m-icon name="close" size="20px" />
</template>
```

## Icon list

<script setup>
import iconList from "../json/iconfont.json";
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
