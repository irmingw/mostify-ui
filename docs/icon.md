# Icons

Icon components are a collection of icons, and the system provides some basic icons that need to be installed separately

## Use Icons

```html
<template>
  <m-icon name="close" size="20px" />
</template>
```

## Icon list

<script setup>
import iconList from "./public/json/iconfont.json";
</script>
<div class="icon_list_demo">
    <section class="item" v-for="item in iconList.glyphs" :key="item.font_class">
        <m-icon :name="item.font_class" size="36px"></m-icon>
        <span>{{item.font_class}}</span>
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
      font-size: 14px;

      &:hover {
        background-color: var(--m-primary-200);
        color: var(--m-primary-600);
      }
    }
  }
  </style>
