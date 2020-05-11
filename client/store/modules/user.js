import { apiLogin, apiLogout, apiUserInfo } from '@/api/login'
import { setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    companyId: null, // 用户所属企业id
    customerId: null, // 用户id
    sessionId: null,
    companyInfo: {},
    customerInfo: {}
  },

  mutations: {
    SET_COMPANY_ID: (state, companyId) => {
      state.companyId = companyId
    },
    SET_CUSTOMER_ID: (state, customerId) => {
      state.customerId = customerId
    },
    SET_SESSION_ID: (state, sessionId) => {
      state.sessionId = sessionId
    },
    SET_COMPANY_INFO: (state, companyInfo) => {
      state.companyInfo = companyInfo
    },
    SET_CUSTOMER_INFO: (state, customerInfo) => {
      state.customerInfo = customerInfo
    }
  },

  actions: {
    // 登录
    async LoginAction({ commit }, userInfo) {
      const phone = userInfo.phone.trim()
      const password = userInfo.password.trim()
      try {
        const { data } = apiLogin({ phone, password })
        setToken(data.sessionId)
        return data
      } catch (error) {
        return Promise.reject(error)
      }
    },
    // 退出
    async getUserInfoAction({ commit, state }) {
      try {
        const { data } = apiLogout(state.sessionId)
        return data
      } catch (error) {
        return Promise.reject(error)
      }
    },
    // 获取用户信息
    async getUserInfo({ commit }, sessionId) {
      try {
        const { data } = apiUserInfo(sessionId)
        removeToken()
        return data
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
}

export default user
