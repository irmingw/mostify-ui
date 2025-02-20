import { createApp } from "vue";
import Mostify from "@/main";
import '../packages/var'
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.use(Mostify, { size: "small", zIndex: 1000 });
app.use(router);
app.mount("#app");
