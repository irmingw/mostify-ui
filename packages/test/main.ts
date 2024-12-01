import { createApp } from "vue";
import Mostify from '@/mostify-ui/components'
import MostifyIcon from "@/mostify-ui-icon";
import App from "./App.vue";

const app = createApp(App); 
app.use(Mostify)
app.use(MostifyIcon)
app.mount("#app")