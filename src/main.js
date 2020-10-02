import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
import axios from "axios";
require("@/assets/main.scss");
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(Vuelidate);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
