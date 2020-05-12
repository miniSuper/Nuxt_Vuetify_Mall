const getters = {
  sessionId: (state) => state.user.sessionId,
  isLogined: (state) => state.user.sessionId,
  isLoginShow: (state) => state.app.isLoginShow
}
export default getters
