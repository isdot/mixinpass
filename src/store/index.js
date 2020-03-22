import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    viewName: 'SignIn',
    mixinUser: {
      uid: '12355'
    },
    pwdList: [],
    currentPwd: {}
  },
  mutations: {
    setViewName: (state, { name }) => {
      state.viewName = name
    },
    setPwdList: (state, { list }) => {
      state.pwdList = list
    },
    setCurrentPwd: (state, { pwd }) => {
      state.currentPwd = JSON.parse(JSON.stringify(pwd))
    }
  }
})
export default store
