<template>
  <pre class="hljs github">
    <code v-html="codeHtml"></code>
  </pre>
</template>

<script setup lang="ts">
import { computed } from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  lang: {
    type: String,
    default: "html",
  },
});

const codeHtml = computed(() => hljs.highlight(props.code, { language: props.lang }).value);
</script>

<style scoped>
.hljs {
  padding: 1rem;
  overflow-x: auto;
  border-radius: 8px;
  background-color: #ebebeb;
  font-family: monospace;
}
</style>
