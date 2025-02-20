<template>
  <div>
    <MOverlay v-model="show" backgroundColor="red">
      <div style="background:#fff">overlay</div>
    </MOverlay>
    <MButton @click="show = true">SHOW</MButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const show = ref(false);
</script>

<style scoped></style>
