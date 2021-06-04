import Vue from "vue";
import App from "./App.vue";
import { VueReCaptcha } from "vue-recaptcha-v3";

// For more options see below
Vue.use(VueReCaptcha, { siteKey: "6LfHRAwbAAAAAFnBNI1iYRG2wgFHJTeAY5dDEYfH" });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
