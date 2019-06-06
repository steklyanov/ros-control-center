import Vue from 'vue'
import Vuex from 'vuex'
const ROSLIB = require('roslib')

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ip_address: null,
    ros: new ROSLIB.Ros,
    nodes: {}
  },
  getters: {
    GET_NODES: state => {
      return state.nodes;
    },
    IP_ADDRESS: state => {
      return state.ip_address;
    },
    GET_ROS: state => {
      return state.ros;
    }
  },
  mutations: {
    SET_NODES: (state, payload) => {
      state.nodes = payload;
    },
    SET_IP_ADDRESS: (state, payload) => {
      state.ip_address = payload;
    },
    CHANGE_ROS: (state) => {
      state.ros = new ROSLIB.Ros({
        // url : "ws://10.0.1.7:9090"
        url: state.ip_address
      })
    }
  },
  actions: {
    UPDATE_NODES: async (context, payload) => {
      await context.commit('SET_NODES', payload);
    },
    INIT_ROS: async (context) => {
      await context.commit('CHANGE_ROS')
    }
  }
//   actions: {
//     IP_ADDRES: (context, payload) {
//       context.commit('SET_IP_ADDRESS', payload);
// },
// } https://habr.com/ru/post/421551/
})
