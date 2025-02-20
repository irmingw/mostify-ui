<template>
  <div>
    <m-button @click="open = true">OPEN</m-button>
    <m-dialog v-model="open" title="Title" top="">
      The header slot can be used to customize the area where the title is displayed. In
      order to maintain accessibility, use the title attribute in addition to using this
      slot, or use the titleId slot property to specify which element should be read out
      as the dialog title.
      <template #footer>
        <m-button>footer</m-button>
      </template>
    </m-dialog>

    <m-button @click="open2 = true">OPEN2</m-button>
    <m-dialog v-model="open2" title="Title" center>
      The header slot can be used to customize the area where the title is displayed. In
      order to maintain accessibility, use the title attribute in addition to using this
      slot, or use the titleId slot property to specify which element should be read out
      as the dialog title.2
    </m-dialog>

    <m-button @click="open3 = true">OPEN3</m-button>
    <m-dialog v-model="open3" title="Title" center closeIcon escapeClose>
      <div style="height: 800px; width: 1500px; background: #ccc">
        <div>
          The header slot can be used to customize the area where the title is displayed.
          In order to maintain accessibility, use the title attribute in addition to using
          this slot, or use the titleId slot property to specify which element should be
          read out as the dialog title.
        </div>

        <m-button @click="op5 = true">op5</m-button>
        <m-dialog v-model="op5" title="Title" center closeIcon escapeClose>
          <div>
            <div>
              The header slot can be used to customize the area where the title is
              displayed. In order to maintain accessibility, use the title attribute in
              addition to using this slot, or use the titleId slot property to specify
              which element should be read out as the dialog title.
            </div>
          </div></m-dialog
        >
      </div></m-dialog
    >

    <m-button @click="open4 = true">fullscreen</m-button>
    <m-dialog v-model="open4" title="Title" fullscreen closeIcon>
      <div style="height: 200px; background: #ccc">
        <div>
          The header slot can be used to customize the area where the title is displayed.
          In order to maintain accessibility, use the title attribute in addition to using
          this slot, or use the titleId slot property to specify which element should be
          read out as the dialog title.
        </div>
      </div></m-dialog
    >
    <MButton @click="openMsg">Alert</MButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MessageBox } from "@/main";

const open = ref(false);
const open2 = ref(false);
const open3 = ref(false);
const open4 = ref(false);
const op5 = ref(false);

const openMsg = () => {
  MessageBox.alert("这个是一个提示框", "提示");
};
</script>

<style scoped></style>
