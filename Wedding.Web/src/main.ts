import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Import global CSS and Fonts:
import "typeface-roboto";
import "@fortawesome/fontawesome-free/css/all.css";
import "vuetify/dist/vuetify.min.css";
import "coalesce-vue-vuetify/dist/coalesce-vue-vuetify.css";
import "@/site.scss";

// SETUP: vuetify
import Vuetify from "vuetify";
Vue.use(Vuetify);
const vuetify = new Vuetify({
  icons: {
    iconfont: "fa", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  treeShake: true,
  customProperties: true,
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: "#9d3e33",
        secondary: "#a44b4c",
        tertiary: "#723c43",
        accent: "#44455d",
        error: "#df323b", // This is the default error color with darken-1
      },
    },
    dark: true,
  },
});

// Global defaults for vuetify components. Change as desired.
// @ts-expect-error - No typedefs for vue.options.components
const components: any = Vue.options.components;
components.VInput.options.props.dense.default = true;
components.VTextField.options.props.dense.default = true;
components.VTextField.options.props.outlined.default = true;

// SETUP: coalesce-vue
import { AxiosClient as CoalesceAxiosClient } from "coalesce-vue";
CoalesceAxiosClient.defaults.baseURL = "/api";
CoalesceAxiosClient.defaults.withCredentials = true;

// SETUP: coalesce-vue-vuetify
import $metadata from "@/metadata.g";
// viewmodels.g has sideeffects - it populates the global lookup on ViewModel and ListViewModel.
import "@/viewmodels.g";
import CoalesceVuetify from "coalesce-vue-vuetify";
Vue.use(CoalesceVuetify, {
  metadata: $metadata,
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
