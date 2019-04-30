import Vue from 'vue';
import Vuex from 'vuex';
const ROSLIB = require('roslib')

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ip_address: null,
    ros: null
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
    CHANGE_ROS: (state, payload) => {
      state.ros = new ROSLIB.Ros({
        url : payload
      });
    }
  },
  actions: {
    INIT_ROS: async (context, payload) => {
      console.log('before')
      context.commit('CHANGE_ROS', payload)
      console.log('after')
    }
  }
//   actions: {
//     IP_ADDRES: (context, payload) {
//       context.commit('SET_IP_ADDRESS', payload);
// },
// } https://habr.com/ru/post/421551/
});
