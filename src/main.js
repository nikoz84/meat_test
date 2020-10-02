import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Overdrive from "vue-overdrive";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(Overdrive);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
