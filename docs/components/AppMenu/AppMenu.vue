<template>
  <nav class="my_nav">
    <div class="nav_wrapper">
      <template v-for="item in data">
        <section
          v-if="item.path"
          class="nav_item"
          :data-active="item.path === active ? 'on' : 'off'"
          :key="item.path"
          @click="onClick(item.path)"
        >
          {{ item.title }}
        </section>
        <section class="nav_title" v-else :key="item.title">
          {{ item.title }}
        </section>
      </template>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { data } from "./data";
import { ref } from "vue";

const active = ref("");
const router = useRouter();

const onClick = (path: string) => {
  active.value = path;
  router.push(path);
};
</script>

<style lang="scss" scoped>
.my_nav {
  width: 240px;
  min-width: 240px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid var(--m-text-400);
}

.nav_wrapper {
  position: fixed;
  top: 68px;
  left: 0;
  width: 240px;
  height: calc(100% - 68px);
  overflow: auto;
  padding: 32px 20px 20px 32px;
}

.nav_item {
  padding: 8px 16px 8px 24px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #f5f7fa;
  }

  &:not(last-child) {
    margin-bottom: 8px;
  }

  &[data-active="on"] {
    background: rgb(198, 234, 255);
  }
}

.nav_title {
  padding: 8px 16px;
  font-size: 14px;
  color: var(--m-text-700);
}
</style>
