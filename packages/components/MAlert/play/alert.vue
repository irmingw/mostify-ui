<template>
  <div class="test">
    <m-alert v-for="item in types" :type="item" border>Hello</m-alert>
    <m-alert v-for="item in types" :type="item" showIcon>Hello</m-alert>
    <m-alert v-for="item in types" :type="item" showClose>Hello</m-alert>
    <m-alert v-for="item in types" :type="item" showClose>
      <template #title>Hello</template>
    </m-alert>

    <m-alert v-for="item in types" :type="item" :showClose="true">
      <template #title>Hello</template>
      This is Description
    </m-alert>

    <m-alert v-for="item in types" :type="item" dark>Hello</m-alert>
    <m-alert v-for="item in types" :type="item" dark showClose>Hello</m-alert>
    <m-alert v-for="item in types" :type="item" dark showClose showIcon>Hello</m-alert>
  </div>
</template>

<script setup lang="ts">
const types = ["primary", "danger", "success", "warning",'info'];
</script>

