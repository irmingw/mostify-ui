<template>
  <div class="app">
    <div class="inner">
       <!-- <MDialog /> -->
      <Input />
      <!-- <Button /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import MDialog from "./Dialog.vue";
import Input from "./Input.vue";
// import Button from "./Button.vue";
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.component {
  padding: 24px;
}
</style>
