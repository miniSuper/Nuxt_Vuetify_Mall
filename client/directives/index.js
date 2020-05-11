import store from '@/store'

import Clipboard from './clipboard'

export const clipboard = Clipboard

// 防止重复点击，如果只用disabled属性只能适用于button,故改为使用pointerEvents
export const preventReClick = {
  install(Vue) {
    Vue.directive('preventReClick', preventReClick)
  },
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
}

// 进入页面  自动聚焦
export const focus = {
  install(Vue) {
    Vue.directive('focus', focus)
  },
  inserted(el) {
    el.focus()
  }
}

export const login = {
  install(Vue) {
    Vue.directive('login', login)
  },
  inserted(el) {
    const isLogined = store.getters && store.getters.isLogined
    if (!isLogined) {
      window.open('baidu.com')
    }
  }
}

export const src = {
  install(Vue) {
    Vue.directive('src', src)
  },
  inserted(el, binding) {
    const fileName = el.src.slice(el.src.lastIndexOf('/'))
    el.src = process.env.BASE_IMG_URL + fileName
    console.log(el)
  }
}
