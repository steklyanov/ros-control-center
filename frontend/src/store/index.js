import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ip_address: null
  },
  getters: {
    IP_ADDRESS: state => {
      return state.ip_address;
    },
  },
  mutations: {
    SET_IP_ADDRESS: (state, payload) => {
      state.ip_address = payload;
    },
  },
//   actions: {
//     IP_ADDRES: (context, payload) {
//       context.commit('SET_IP_ADDRESS', payload);
// },
// } https://habr.com/ru/post/421551/
});
