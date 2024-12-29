<template>
  <div style="height: 150vh">
    <m-button @click="open = true">OPEN</m-button>
    <m-dialog v-model="open" title="Title" top="" closeIcon> Hello World! </m-dialog>

    <m-button @click="open2 = true">OPEN2</m-button>
    <m-dialog v-model="open2" title="Title" closeDestroy center> Hello World!2 </m-dialog>

    <m-button @click="open3 = true">OPEN3</m-button>
    <m-dialog v-model="open3" title="Title" center closeIcon escapeClose>
      <div style="height: 800px">
        <h1>Hello</h1>

        <m-button @click="op5 = true">op5</m-button>
        <m-dialog v-model="op5" title="Title" center closeIcon escapeClose>
          <div>
            <h1>Hello</h1>
          </div></m-dialog
        >
      </div></m-dialog
    >

    <m-button @click="open4 = true">fullscreen</m-button>
    <m-dialog v-model="open4" title="Title" fullscreen closeIcon>
      <div style="height: 800px">
        <h1>Hello</h1>
      </div></m-dialog
    >
    <div>
      一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字
      一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字
    </div>
    <div style="background:#565656;height:500px;">
      
    </div>

    <MButton @click="()=> {
      MessageBox.alert('Hello')
    }">Alert</MButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MessageBox } from "@/mostify/components";

const open = ref(false);
const open2 = ref(false);
const open3 = ref(false);
const open4 = ref(false);
const op5 = ref(false);
</script>

<style scoped></style>
