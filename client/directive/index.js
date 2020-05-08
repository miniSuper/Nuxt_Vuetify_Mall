import Vue from 'vue'
import store from '@/store'
// 防止重复点击，如果只用disabled属性只能适用于button,故改为使用pointerEvents
const preventReClick = Vue.directive('preventReClick', {
  inserted(el, binding) {
    el.addEventListener('click', () => {
      if (!el.style.pointerEvents) {
        // el.disabled = true
        el.style.pointerEvents = 'none'
        setTimeout(() => {
          // el.disabled = false
          el.style.pointerEvents = ''
        }, binding.value || 2000)
      }
    })
  }
})

// 进入页面  自动聚焦
const focus = Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

const login = Vue.directive('login', {
  inserted(el) {
    const isLogined = store.getters && store.getters.isLogined
    if (!isLogined) {
      window.open('baidu.com')
    }
  }
})

export default {
  preventReClick,
  focus,
  login
}
