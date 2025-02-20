# 图标 Icons

图标组件是一系列图标集合，系统会提供一部分基础图标，图标需要单独安装

## 使用图标

```html
<template>
  <m-icon name="close" size="20px" />
</template>
```

## 图标列表

<script setup>
import iconList from "../public/json/iconfont.json";
  </script>
<div class="icon_list_demo">
      <section class="item" v-for="item in iconList.glyphs" :key="item.font_class">
          <m-icon :name="item.font_class" size="36px"></m-icon>
          <div>{{item.font_class}}</div>
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
      width: 140px;
      height: 90px;
      border-radius: 4px;
      padding: 20px 8px;
      transition: all 0.3s;
      cursor: pointer;
      font-size: 12px;

      &:hover {
        background-color: var(--m-primary-200);
        color: var(--m-primary-600);
        font-weight: bold;
      }
    }
  }
  </style>
