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
  return !['/zh/','/en/','/'].includes(route.path);
});
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

.title {
  font-size: 20px;
  line-height: 36px;
}

.app_layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 600px;
}
.header {
  min-height: 64px;
  max-height: 64px;
  width: 100%;
}

.header_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid var(--m-text-400);
  padding: 0 48px;
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  z-index: 100;
}

.main {
  flex: 1;
  display: flex;
}

.content {
  padding: 24px;
  width: 100%;
}

// .layout-enter-active,
// .layout-leave-active {
//   transition: all 500ms;
// }
// .layout-enter-from,
// .layout-leave-to {
//   opacity: 0;
//   filter: blur(5px)
// }

</style>
