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
         faLock,
         faTimes, 
         faEnvelope} from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee,
            faQuestion,
            faHandshake,
            faUser,
            faHistory,
            faPlus,
            faBarcode,
            faLock,
            faEnvelope,
            faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import Button from "@/components/Button.vue";
import IconButton from '@/components/IconButton.vue';
import SectionButton from '@/components/SectionButton.vue';
import VDivider from '@/components/VDivider.vue';
import Expander from '@/components/Expander.vue';

Vue.component("fu-expander", Expander);
Vue.component("fu-section-button", SectionButton);
Vue.component("fu-icon-button", IconButton);
Vue.component("fu-button", Button);
Vue.component('fu-divider', VDivider);

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
