<template>
  <div class="app">
    <MAlert style="width: 400px" title="提示" showClose
      >这是一段文字这是一段文字这是一段文字
      <div>这是一段文字这是一段文字这是一段文字</div></MAlert
    >
    <MAlert type="danger" style="width: 400px" showClose
      >这是一段文字这是一段文字这是一段文字</MAlert
    >
    <MAlert type="warning" style="width: 400px"
      >这是一段文字这是一段文字这是一段文字</MAlert
    >
    <MAlert type="success" style="width: 400px"
      >这是一段文字这是一段文字这是一段文字</MAlert
    >
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 32px;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0px;
  width: 100%;
}
</style>
