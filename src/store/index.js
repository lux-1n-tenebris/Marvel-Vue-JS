import Vue from 'vue'
import Vuex from 'vuex'

import heroModule from './modules/hero'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    heroModule
  }
})