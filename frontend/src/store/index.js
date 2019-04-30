import Vue from 'vue';
import Vuex from 'vuex';
const ROSLIB = require('roslib')

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ip_address: null,
    ros: new ROSLIB.Ros,
    twist: null,
    cmdVel: null
  },
  getters: {
    IP_ADDRESS: state => {
      return state.ip_address;
    },
    GET_ROS: state => {
      return state.ros;
    }
  },
  mutations: {
    SET_IP_ADDRESS: (state, payload) => {
      state.ip_address = payload;
    },
    CHANGE_ROS: (state) => {
      state.ros = new ROSLIB.Ros({
        url : this.$store.getters.IP_ADDRESS
      });
    },
    CHANGE_CMDVEL: (state, payload) => {
      state.cmdVel = payload;
    },
    CHANGE_TWIST: (state, payload) => {
      state.twist = payload;
    }
  },
  actions: {
    INIT_ROS: async (context) => {

      await context.commit('CHANGE_ROS')
    },
    INIT_CMDVEL: async (context, payload) => {
      await context.commit('CHANGE_CMDVEL', payload)
    },
    INIT_TWIST: async (context, payload) => {
      await context.commit('CHANGE_TWIST', payload)
    }
  }
//   actions: {
//     IP_ADDRES: (context, payload) {
//       context.commit('SET_IP_ADDRESS', payload);
// },
// } https://habr.com/ru/post/421551/
});
