import { createApp } from "vue";
import Mostify from "@/mostify/components";
import App from "./App.vue";

const app = createApp(App);
app.use(Mostify, { size: "mini", zIndex: 1000 });
app.mount("#app");
