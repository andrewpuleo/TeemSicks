import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uid: -1,
    isLoggedIn: false,
    //cart: []
  },
  getters: {
    getIsLoggedIn: state => {
      return state.isLoggedIn
    },
    getUID: state => {
      return state.uid
    }
    
  },
  mutations: {
    login (state, id) {
      state.uid = id,
      state.isLoggedIn = true
    },

    logout (state) {
      state.uid = -1,
      state.isLoggedIn = false
    }
  },
  actions: {

  },
});
