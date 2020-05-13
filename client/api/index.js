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

/** ************************* 改性料交易  ***************************/

export const apiProductName = (data) => {
  return request({
    url: '/orderBaseData/proNameList',
    method: 'post',
    data
  })
}

export const apiIndustrySolutionList = (data) => {
  return request({
    url: '/orderBaseData/findIndustryList',
    method: 'post',
    data
  })
}

export const apiModifedMaterialList = (data) => {
  return request({
    url: '/orderBaseData/modifiedList',
    method: 'post',
    data
  })
}

// 改性料详情
export const apiModifedMaterialDetail = (data) => {
  return request({
    url: '/orderBaseData/productionInfo',
    method: 'post',
    data
  })
}

// 改性料详情
export const apiModifedMaterialCollect = (data) => {
  return request({
    url: '/orderBaseData/collectAction',
    method: 'post',
    data
  })
}

/** ************************* 改性料交易 end  ***********************/

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
    url: '/article/getFaqById',
    method: 'get',
    params
  })
}

/** ************************* 帮助中心 end  ***********************/

/** ************************* 市场供求  ***************************/

export const apiMarketFilterList = (params) => {
  return request({
    url: '/supplyDemand/getOptionalCondition',
    method: 'get',
    params
  })
}

export const apiMarketTraderList = (params) => {
  return request({
    url: '/supplyDemand/selectSupplyDemand',
    method: 'get',
    params
  })
}

/** ************************* 市场供求 end ************************/
