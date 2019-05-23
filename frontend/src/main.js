// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'nipplejs/dist/nipplejs'
// import './public/easeljs.js'
// const createjs = require( 'createjs')
let createjs = require("createjs");
// import createjs from 'createjs';
// const createjs = createjs;
// const createjs = require( 'createjs')
import './public/eventemitter2.min'
import './public/ros2d.js'
import './public/nav2d.min.js'

import axios from 'axios';
import VueAxios from 'vue-axios';
import {store} from './store';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
