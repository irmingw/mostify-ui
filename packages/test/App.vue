<template>
  <div class="app">
    <MButton disabled>DEOMO</MButton>
    <MButton type="text">DEOMO</MButton>
    <MButton type="default">DEOMO</MButton>
    <m-dialog :visible="visible" title="Title Text" @close="visible = false">
  This is a dialog box component
</m-dialog>
<m-button @click="visible = true" type="primary">open a dialog box</m-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
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
