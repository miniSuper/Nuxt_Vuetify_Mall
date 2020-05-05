import request from '@/utils/request'

// 获取公司基本信息
export const apiCompanyInfo = (params) => {
  return request({
    url: '/company/web/info',
    method: 'get',
    params
  })
}
