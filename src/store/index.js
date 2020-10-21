import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings:{
      starttime: undefined,
      lang: undefined
    }
  },
  getters: {
    savedSettings:(state) => {
      return state.settings;
    }
  },
  mutations: {
    saveSettings: (state, payLoad) => {
      state.settings = payLoad;
    }
  },
  actions: {
    saveSettings: ( {commit}, payLoad) => {
      commit('saveSettings', payLoad)
    }
  },
  modules: {
  }
})
