import request from '@/utils/request'

export const apiLogin = (data) => {
  return request({
    url: '/login/signIn',
    method: 'post',
    data
  })
}

export const apiLogout = (data) => {
  return request({
    url: '/index/Cancellation',
    method: 'post',
    data
  })
}

// 接口还没给 先占用着
export const apiUserInfo = (data) => {
  return request({
    url: '/index/userInfo',
    method: 'post',
    data
  })
}
