<template>
  <div class="test">
    <m-button v-for="(item, index) in types" :key="item + index" :type="item"
      >BUTTON</m-button
    >
  </div>
  <div class="test">
    <m-button light v-for="(item, index) in lights" :key="item + index" :type="item"
      >BUTTON</m-button
    >
  </div>

  <div class="test">
    <m-button light v-for="(item, index) in sizes" :key="item + index" :size="item"
      >BUTTON</m-button
    >
  </div>
  <div class="test">
    <m-button light v-for="(item, index) in shapes" :key="item + index" :shape="item"
      >BUTTON</m-button
    >
  </div>

  <div class="test">
    <m-button loading>BUTTON</m-button>
    <m-button disabled>BUTTON</m-button>
  </div>

  <div class="test">
    <m-button block v-for="(item, index) in types" :key="item + index" :type="item"
      >BUTTON</m-button
    >
  </div>
</template>

<script setup lang="ts">
const types = ["default", "primary", "success", "warning", "danger", "link", "text"];
const lights = ["primary", "success", "warning", "danger"];
const sizes = ["mini", "small", "large"];
const shapes = ["circle", "round", "square"];
</script>
