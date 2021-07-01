import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: localStorage.getItem('userInfo') == null ? null : JSON.parse(localStorage.getItem('userInfo'))
  },
  getters: {
    userInfo: state => state.userInfo
  },
  mutations: {
    saveUserInfo(state, userInfo){
      state.userInfo = userInfo;
    }
  },
  actions: {

  },
  modules: {
  }
})
