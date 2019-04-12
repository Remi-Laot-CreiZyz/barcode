import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import UUID from 'vue-uuid'

Vue.use(UUID)

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee,
         faQuestion,
         faHandshake,
         faUser,
         faHistory,
         faPlus,
         faBarcode,
         faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee,
            faQuestion,
            faHandshake,
            faUser,
            faHistory,
            faPlus,
            faBarcode,
            faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import Button from "@/components/Button.vue";
import IconButton from '@/components/IconButton.vue';
import VDivider from '@/components/VDivider.vue';

Vue.component("fu-icon-button", IconButton);
Vue.component("fu-button", Button);
Vue.component('fu-divider', VDivider);

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
