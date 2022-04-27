import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/sass/base.scss";

import App from "./App";
import router from "./router";

console.log(import.meta.env);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
