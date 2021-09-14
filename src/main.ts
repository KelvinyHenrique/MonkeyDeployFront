import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFeather from "vue-feather";
import "@/assets/tailwind.css";

createApp(App)
  .use(store)
  .component("vue-feather", VueFeather)
  .use(router)
  .mount("#app");
