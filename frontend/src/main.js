// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'nipplejs/dist/nipplejs'
import axios from 'axios';
import VueAxios from 'vue-axios';
import {store} from './store';
import {i18n} from './plugins/i18n'
import FlagIcon from 'vue-flag-icon'

Vue.config.productionTip = false
Vue.use(FlagIcon)

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
