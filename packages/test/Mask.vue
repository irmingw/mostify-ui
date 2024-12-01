<template>
  <div>
    <MMask :visible="show" @hide="show = false">
      <div style="background: #f0f0f0">
        Hello world!
        <MButton @click="show = false">MaskHide</MButton>
      </div>
    </MMask>
    <MButton @click="show = !show">MaskShow</MButton>
  </div>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
const show2 = ref(false);
</script>

<style lang="scss" scoped></style>
