import { createApp } from "vue";
import App from "./App.vue";

//we import CreatePinia to be able to use it
import { createPinia } from "pinia";

import "./assets/main.css";
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
