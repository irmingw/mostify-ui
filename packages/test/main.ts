import { createApp } from "vue";
import Mostify from '@/mostify-ui/components'
import App from "./App.vue";

const app = createApp(App); 
app.use(Mostify)
app.mount("#app")