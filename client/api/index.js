import request from '@/utils/request'

// 获取公司基本信息
export const apiCompanyInfo = (params) => {
  return request({
    url: '/company/web/info',
    method: 'get',
    params
  })
}

// 获取新闻类目列表
export const apiMarketNewsTypeList = (params) => {
  return request({
    url: '/article/getInfoType',
    method: 'get',
    params
  })
}

// 获取新闻资讯列表
export const apiMarketNewsList = (params) => {
  return request({
    url: '/article/getInfoByType',
    method: 'get',
    params
  })
}

/** ************************* 帮助中心  ***************************/

export const apiHelpList = (params) => {
  return request({
    url: '/article/getHelpList',
    method: 'get',
    params
  })
}

export const apiFaqList = (params) => {
  return request({
    url: '/article/getFaqByType',
    method: 'get',
    params
  })
}

export const apiFaqDetail = (params) => {
  return request({
    url: '/article/getFaqByType',
    method: 'get',
    params
  })
}

/** ************************* 帮助中心 end  ***********************/
