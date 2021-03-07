// vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 导入抽取的mutations、actions
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
// 抽取state
const state = {
  cartList: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})
