import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/global.scss";

import fullscreen from "vue-fullscreen";
Vue.use(fullscreen);

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCoffee,
  faQuestion,
  faHandshake,
  faUser,
  faHistory,
  faPlus,
  faBarcode,
  faLock,
  faTimes,
  faEnvelope,
  faArrowLeft,
  faExpandArrowsAlt,
  faCompressArrowsAlt,
  faTrophy,
  faKey,
  faSadTear,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCoffee,
  faQuestion,
  faHandshake,
  faUser,
  faHistory,
  faPlus,
  faBarcode,
  faLock,
  faEnvelope,
  faExpandArrowsAlt,
  faCompressArrowsAlt,
  faTimes,
  faArrowLeft,
  faTrophy,
  faHandshake,
  faKey,
  faSadTear,
  faChevronRight
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import Button from "@/components/Button.vue";
import IconButton from "@/components/IconButton.vue";
import SectionButton from "@/components/SectionButton.vue";
import Expander from "@/components/Expander.vue";
import CodeViewer from "@/components/CodeViewer.vue";
import ProductImage from "@/components/ProductImage.vue";
import Logo from "@/components/Logo.vue";
import Input from "@/components/Input.vue";
import ListItem from "@/components/ListItem.vue";

Vue.component("fu-list-item", ListItem);
Vue.component("fu-product-image", ProductImage);
Vue.component("fu-expander", Expander);
Vue.component("fu-section-button", SectionButton);
Vue.component("fu-icon-button", IconButton);
Vue.component("fu-button", Button);
Vue.component("fu-code-viewer", CodeViewer);
Vue.component("fu-logo", Logo);
Vue.component("fu-input", Input);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
