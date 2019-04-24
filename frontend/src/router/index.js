// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import MainStructure from "@/components/MainStructure"
import Settings from "@/views/Settings"
import SendPresent from "../views/SendPresent";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
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
      component: MainStructure
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/send_present',
      name: 'send_present',
      component: SendPresent
    }
  ]
})
