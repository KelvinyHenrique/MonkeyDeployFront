import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFeather from "vue-feather";
import "@/assets/tailwind.css";
import Unicon from "vue-unicons";
import {
  uniLayerGroupMonochrome,
  uniCarWash,
  Rocket,
} from "vue-unicons/dist/icons";
Unicon.add([uniLayerGroupMonochrome, uniCarWash, Rocket]);

createApp(App)
  .use(store)
  .use(Unicon)
  .component("vue-feather", VueFeather)
  .use(router)
  .mount("#app");
