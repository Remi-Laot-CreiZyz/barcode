import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import info from './views/info.vue'
import compte from './views/compte.vue'
import history from './views/history.vue'
import prenium from './views/prenium.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/compte',
      name: 'compte',
      component: compte
    },
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/prenium',
      name: 'prenium',
      component: prenium
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
