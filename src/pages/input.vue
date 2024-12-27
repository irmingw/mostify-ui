<template>
  <div class="test">
    <m-input v-model="str" width="240px" />
    <m-input v-model="str" width="240px" type="password" />
    <m-input v-model="str" width="240px" placeholder="hello" />
  </div>

  <div class="test">
    <m-input v-model="str" width="240px" prefix="Prefix" />
    <m-input v-model="str" width="240px" suffix="suffix" />
  </div>

  <div class="test">
    <m-input v-model="str" width="240px" prepend="prepend" />
    <m-input v-model="str" width="240px" append="append" />
  </div>

  <div class="test">
    <m-input v-model="str" width="240px" disabled />
    <m-input v-model="str" width="240px" readonly />
  </div>

  <div class="test">
    <m-input v-model="str" width="240px" showLimitCount maxlength="20" />
    <m-input v-model="str" width="240px" type="password" showLimitCount maxlength="20" />
    <m-input v-model="str" width="240px" placeholder="hello" showLimitCount maxlength="20" />
  </div>

  <div class="test">
    <m-input v-model="str" width="240px" type="password" showPasswordIcon maxlength="20" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const str = ref("");
</script>
