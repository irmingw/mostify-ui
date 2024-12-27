<template>
  <div class="test">
    <m-checkbox>Xiaomi</m-checkbox>
    <m-checkbox indeterminate>华为</m-checkbox>
    <m-checkbox checked>vivo</m-checkbox>
    1231232
  </div>
  <div class="test">
    <m-checkbox v-for="item in sizes" :size="item">xiaomi</m-checkbox>
  </div>
  <div class="test">
    <m-checkbox disabled>小米</m-checkbox>
    <m-checkbox readonly>huawei</m-checkbox>
  </div>
</template>

<script setup lang="ts">
const sizes = ["mini", "small", "large"];
</script>

<style scoped></style>
