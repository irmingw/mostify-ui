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

<style scoped lang="scss">
@import './style';
</style>
