<template>
  <div class="test">
    <m-input-number v-model="str" />
    <m-input-number v-model="str" />
  </div>

  <div class="test">
    <m-input-number size="large" v-model="str" />
    <m-input-number size="mini" v-model="str" />
  </div>

  <m-input-number v-model="str" min="1" max="2" controlsPosition="right" />
  <br />
  <m-input-number disabled v-model="str" min="1" max="2" controlsPosition="right" />
  <br />
  <m-input-number readonly v-model="str" min="1" max="2" controlsPosition="right" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const str = ref("");
</script>

<style scoped></style>
