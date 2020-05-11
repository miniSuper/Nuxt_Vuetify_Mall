import Vue from 'vue'
// import components from '../components/global'
import globalMixin from '../mixins/global'
import filters from '../filters'
import Cookies from 'js-cookie'
import * as directives from '../directives'
import * as CommonFunc from '@/utils/commonFunc'

Vue.prototype.$cookies = Cookies
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

// Object.keys(components).forEach((key) => {
//   Vue.component(`${key}`, components[key])
// })

Vue.mixin(globalMixin)

Vue.prototype.$commonFunc = CommonFunc

Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key])
})
