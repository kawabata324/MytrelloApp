import { createApp } from "vue";
import App from "./App.vue";
import Style from "./assets/css/style.css";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(Style).use(pinia).mount("#app");
