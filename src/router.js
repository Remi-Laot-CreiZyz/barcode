import Vue from "vue";
import Router from "vue-router";
import Scanner from "./views/scanner.vue";
import Welcome from "./views/welcome.vue";
import info from "./views/info.vue";
import compte from "./views/compte.vue";
import history from "./views/history.vue";
import premium from "./views/premium.vue";
import details from "@/views/Details.vue";
import perdu from "@/views/perdu.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/error",
      name: "error",
      component: perdu
    },
    {
      path: "/scan",
      name: "scan",
      component: Scanner
    },
    {
      path: "/info",
      name: "info",
      component: info
    },
    {
      path: "/compte",
      name: "compte",
      component: compte
    },
    {
      path: "/history",
      name: "history",
      component: history
    },
    {
      path: "/premium",
      name: "premium",
      component: premium
    },
    {
      path: "/details/:code",
      name: "details",
      component: details
    }
  ]
});
