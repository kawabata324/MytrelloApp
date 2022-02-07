import { createApp } from "vue";
import App from "./App.vue";
import Style from "./assets/css/style.css";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";
import router from "./router";

const pinia = createPinia();

library.add(fas);
dom.watch();

createApp(App)
  .use(Style)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
