<template>
  <div class="app">
    <div class="inner">
      <MDialog />
      <!-- <Input /> -->
      <Button />
      <m-icon name="close"/>
      <MDropdown placement="topLeft">
        <MButton type="link">下拉</MButton>
        <template #content>
          <MMenuItem >我是下拉内容</MMenuItem>
          <MMenuItem>我是下拉内容</MMenuItem>
        </template>
      </MDropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import MDialog from "./Dialog.vue";
// import Input from "./Input.vue";
import Button from "./Button.vue";
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
