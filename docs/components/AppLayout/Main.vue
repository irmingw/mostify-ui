<template>
  <div class="app_layout">
    <Header />
    <main class="main">
      <AppMenu v-if="showNav" />
      <section class="content">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppMenu from "~/components/AppMenu";
import Header from "./modules/Header.vue";

const route = useRoute();
const showNav = computed(() => {
  console.log(route,'route');
  return !['/zh','/en','/'].includes(route.path);
});
</script>

<style lang="scss">
@import "./styles/mian.scss";
</style>
