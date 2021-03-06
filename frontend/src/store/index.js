import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';
const ROSLIB = require('roslib');

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ip_address: null,
    ros: new ROSLIB.Ros,
    nodes: {},
    poses: [],
    polygons: {}
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
    },
    GET_POSES: state => {
      return state.poses;
    },
    GET_POLYGONS: state => {
      return state.polygons;
    }
  },
  mutations: {
    SET_NODES: (state, payload) => {
      state.nodes = payload;
    },
    SET_POSES: (state, payload) => {
      state.poses = payload;
    },
    SET_IP_ADDRESS: (state, payload) => {
      state.ip_address = payload;
    },
    CHANGE_ROS: (state) => {
      state.ros = new ROSLIB.Ros({
        url: state.ip_address
      })
    },
    SET_POLYGONS: (state, payload) => {
      state.polygons = payload;
    },
  },
  actions: {
    UPDATE_NODES: async (context, payload) => {
      await context.commit('SET_NODES', payload);
    },
    INIT_ROS: async (context) => {
      await context.commit('CHANGE_ROS')
    },
    UPDATE_POSES: async (context, payload) => {
      await context.commit('SET_POSES', payload);
    },
    UPDATE_POLYGONS: async (context, payload) => {
      await context.commit('SET_POLYGONS', payload);
    },
    GET_POLYGONS: async (context, payload) => {
      await context.commit('SET_POLYGONS', payload);
    }
  },
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      setItem: ((key, value) => Cookies.set(key, value, {expires: 3, secure: true})),
      removeItem: key => Cookies.remove(key)
    }
  })]
});
