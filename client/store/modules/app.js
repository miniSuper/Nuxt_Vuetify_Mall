import Cookies from 'js-cookie'

const app = {
  state: {
    isLoginShow: false
  },
  mutations: {
    SET_LOGIN_DIALOG(state, isLoginShow) {
      state.isLoginShow = isLoginShow
    }
  },
  actions: {
    closeLoginDialogAction({ commit }) {
      commit('SET_LOGIN_DIALOG', false)
    },
    openLoginDialogAction({ commit }) {
      commit('SET_LOGIN_DIALOG', true)
    }
  }
}

export default app
