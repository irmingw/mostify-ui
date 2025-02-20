<template>
  <main class="app_main">
    <nav class="app_nav">
      <ul class="app_menu">
        <li
          class="menu_item"
          :class="{ active: route.name == item.name }"
          v-for="item in list"
          @click="router.push({ name: item.name })"
        >
          {{ item.name }}
        </li>
      </ul>
    </nav>
    <div class="app_content">
      <router-view />
    </div>
  </main>
</template>

<script setup lang="ts">
import { routes } from "./router";
import { useRoute, useRouter } from "vue-router";
const list = routes[0].children;

const route = useRoute();
const router = useRouter();
</script>

<style lang="scss">
@import "./layout.scss";
</style>
