<template>
  <div class="app">
    <MAvatar icon="user" shape="square" />
    <m-divider />
    <MAvatar icon="user" size="24px" />
    <m-divider />
    <MAvatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      shape="square"
    />
    <m-divider layout="y" />
    <m-divider layout="y" borderStyle="dashed" />
    <m-divider layout="y" />
    <MAvatar>admin</MAvatar>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.app {
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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
