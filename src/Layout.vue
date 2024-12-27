<template>
  <div class="layout">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.layout {
  padding: 24px;
}

.test {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
  align-items: center;
}
</style>