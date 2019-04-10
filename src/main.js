import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import UUID from 'vue-uuid'

Vue.use(UUID)

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faBarcode } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee,
            faQuestion,
            faHandshake,
            faUser,
            faHistory,
            faPlus,
            faBarcode)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import VDivider from '@/components/VDivider.vue';
Vue.component('vdivider', VDivider);

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
