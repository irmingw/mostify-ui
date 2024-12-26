<template>
  <div class="app">
    <m-input-number v-model="val" :max="12"/>
    <m-input-number v-model="val" :max="12" controlsPosition="right" />
    <m-input-number v-model="val" max="12" controlsPosition="right" prefix="M" />
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const val = ref(10)

</script>

<style>
.app {
  width: 100%;
  height: 100%;
  padding: 32px;
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
