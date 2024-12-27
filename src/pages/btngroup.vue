<template>
  <div v-for="item in types">
    <div class="test">
      <m-button-group>
        <m-button :type="item" v-for="i in 3" :key="i">BUTTON</m-button>
      </m-button-group>
      <m-button-group size="mini">
        <m-button :type="item" v-for="i in 3" :key="i">BUTTON</m-button>
      </m-button-group>
      <m-button-group size="large">
        <m-button :type="item" v-for="i in 3" :key="i">BUTTON</m-button>
      </m-button-group>
    </div>

    <m-button-group layout="y">
      <m-button :type="item" v-for="i in 3" :key="i">BUTTON</m-button>
    </m-button-group>
  </div>
</template>

<script setup lang="ts">
const types = ["primary", "success", "default", "warning", "danger", "link", "text"];
</script>

<style scoped>

</style>
