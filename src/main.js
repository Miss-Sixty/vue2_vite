import Vue from "vue";
import "@/styles/index.css";

import App from "./App.vue";
import router from "./router";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
