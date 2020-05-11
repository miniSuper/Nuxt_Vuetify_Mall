import { getToken } from '@/utils/auth' // getToken from cookie
import NProgress from 'nprogress'

export default ({ app, store }) => {
  app.router.beforeEach(async (to, from, next) => {
    NProgress.start() // start progress bar
    if (getToken() && !store.getters.sessionId) {
      /* has token*/
      await store.dispatch('getUserInfoAction', getToken())
    }
    next()
    NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
  })
  app.router.afterEach(() => {
    NProgress.done() // finish progress bar
  })
}
