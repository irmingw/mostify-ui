import { createApp } from "vue";
import Mostify from "@/mostify/components";
import App from "./App.vue";
import router from "./router";
import '../lib/mostify-ui/dist/dark.css'

// document.documentElement.classList.remove("dark");
// document.documentElement.classList.add("dark");
const app = createApp(App);
app.use(Mostify, { size: "small", zIndex: 1000 });
app.use(router);
app.mount("#app");
