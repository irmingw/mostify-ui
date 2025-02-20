<template>
  <div class="test">
    <m-textarea
      v-model="str"
      maxlength="20"
      placeholder="hello"
      disabled
      showLimitCount
    />
    <m-textarea
      v-model="str"
      maxlength="20"
      placeholder="hello"
      showLimitCount
    />

    <m-textarea
      v-model="str"
      maxlength="20"
      readonly
      placeholder="hello"
      showLimitCount
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const str = ref("");
</script>

<style scoped></style>
