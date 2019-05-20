import Vue from 'vue'
import Router from 'vue-router'
import MainPage from "@/views/MainPage"
import SendPresent from "../views/SendPresent";
import Navigation from "../views/Navigation";
import VoiceControl from "../views/VoiceControl";
import History from "../views/History";
import Test from "../views/Test";
import HandControl from "../views/HandControl";

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
      name: 'gui_panel.html',
      component: MainPage
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
    },
    {
      path: '/hand_control',
      name: 'hand_control',
      component: HandControl
    }
  ]
})
