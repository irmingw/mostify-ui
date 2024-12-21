<template>
    <div class="app">
        <m-button-group>
          <m-button type="default">默认按钮</m-button>
          <m-button>默认按钮</m-button>
          <m-button>默认按钮</m-button>
        </m-button-group>

        <m-button-group layout="y">
          <m-button type="default">默认按钮</m-button>
          <m-button>默认按钮</m-button>
          <m-button>默认按钮</m-button>
        </m-button-group>
        <m-button shape="square" type="link">默认按钮</m-button>
        <m-dialog :visible="true">
        <h1>Hello</h1>
        </m-dialog>
    </div>
</template>

<script setup lang="ts"></script>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
