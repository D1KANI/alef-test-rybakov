import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Петр',
      age: '99',
      childrens: [
      ]
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    saveNewUserData(state, payload) {
      state.user = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
