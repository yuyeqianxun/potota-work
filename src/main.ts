import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import globalComp from "./global/antv";

const app = createApp(App);

globalComp(app);

app
  .use(store)
  .use(router)
  .mount("#app");
