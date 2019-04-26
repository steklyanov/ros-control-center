import Vue from 'vue'
import Router from 'vue-router'
import Main from "@/views/Main"
import SendPresent from "../views/SendPresent";
import Navigation from "../views/Navigation";
import VoiceControl from "../views/VoiceControl";
import History from "../views/History";
import Test from "../views/Test";


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/send_present',
      name: 'send_present',
      component: SendPresent
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: Navigation
    },
    {
      path: '/voice_control',
      name: 'voice_control',
      component: VoiceControl
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
