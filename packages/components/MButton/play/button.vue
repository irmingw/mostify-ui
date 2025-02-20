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
    <m-button light v-for="(item, index) in lights" :key="item + index" :border="false" :type="item"
      >BUTTON</m-button
    >
  </div>

  <div class="test">
    <m-button v-for="(item, index) in sizes" :key="item + index" :size="item"
      >BUTTON</m-button
    >
  </div>
  <div class="test">
    <template v-for="type in types">
      <m-button :type="type" v-for="(item, index) in shapes" :key="item + index" :shape="item"
      >BUTTON</m-button
    >
    </template>
  </div>

  <div class="test">
    <template v-for="type in types">
      <m-button :type="type" block v-for="(item, index) in shapes" :key="item + index" :shape="item"
      >BUTTON</m-button
    >
    </template>
  </div>

  <div class="test">
    <m-button loading type="primary">BUTTON</m-button>
    <m-button loading type="danger">BUTTON</m-button>
    <m-button loading type="warning">BUTTON</m-button>
    <m-button loading type="info">BUTTON</m-button>
    <m-button disabled type="primary">BUTTON</m-button>
    <m-button disabled type="danger">BUTTON</m-button>
    <m-button disabled type="warning">BUTTON</m-button>
    <m-button disabled type="info">BUTTON</m-button>
  </div>

  <div class="test">
    <m-button block v-for="(item, index) in types" :key="item + index" :type="item"
      >BUTTON</m-button
    >
  </div>
  <div class="test">
    <m-button v-for="(item, index) in borderStyles" :key="item + index" :borderStyle="item"
      >BUTTON</m-button
    >
  </div>
</template>

<script setup lang="ts">
const types = ["default", "primary", "success", "warning", "danger", "link", "text",'info'];
const lights = ["primary", "success", "warning", "danger"];
const sizes = ["mini", "small", "large"];
const shapes = ["circle", "round", "square"];
const borderStyles=['solid','dashed']
</script>
