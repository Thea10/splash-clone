import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { MdDialog } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";

Vue.use(MdDialog);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
