import { Message } from 'element-ui'
import { domain } from '@/config'

export const toHomePage = (newTag = true) => {
  if (newTag) {
    window.open(domain + '/HomeIndex')
  } else {
    window.location = domain + '/HomeIndex'
  }
}

export const toLoginPage = () => {}

export const toRegisterPage = () => {}

export const getTimeStr = (date = new Date()) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

export const spanOverOneYear = (startTime, endTime) => {
  const minSecDiff = new Date(endTime).getTime() - new Date(startTime).getTime()
  const dayDiff = minSecDiff / (24 * 60 * 60 * 1000)
  if (dayDiff > 365) {
    Message.error('订单时间跨度不能超过一年！')
    return true
  } else {
    return false
  }
}
