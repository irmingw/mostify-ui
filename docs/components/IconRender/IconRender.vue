<template>
  <div class="icon_render">
    <section v-for="item in icons.glyphs" class="item">
      <MIcon :name="item.font_class" size="32px" />
      <span class="title">
        {{ item.font_class }}
      </span>
    </section>
  </div>
</template>

<script setup lang="ts">
import icons from "./iconfont.json";
</script>

<style scoped>
.icon_render {
  display: flex;
  flex-wrap: wrap;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  max-width: 100%;
  padding: 16px;
  border-radius: 8px;
  transition: all 0.3s;
  &:hover {
    background-color: #e9e9e9;
  }
}

.title {
  font-size: 20px;
  margin-top: 8px;
}
</style>
