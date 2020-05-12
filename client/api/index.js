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
  // return request({
  //   url: '/supplyDemand/getOptionalCondition',
  //   method: 'get',
  //   params
  // })
  return {
    data: {
      code: 200,
      status: true,
      message: '操作成功',
      url: null,
      other: {
        firstMaterials: [
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fTopLevelId: '5725c805513311eab6b2fa163e33e4b2',
            fRecommend: '1',
            categoryId: null,
            category: null,
            fStatus: '0',
            fId: '5725c805513311eab6b2fa163e33e4b2',
            fName: '原材料',
            fLevel: 1,
            fParentId: null,
            fSeq: 2,
            fParentName: null,
            fOriginalStatus: null,
            fMaterialType: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fTopLevelId: '25516cf4539411eab6b2fa163e33e4b2',
            fRecommend: '1',
            categoryId: null,
            category: null,
            fStatus: '0',
            fId: '25516cf4539411eab6b2fa163e33e4b2',
            fName: '改性料',
            fLevel: 1,
            fParentId: null,
            fSeq: 3,
            fParentName: null,
            fOriginalStatus: null,
            fMaterialType: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fTopLevelId: '9ae8332653ac11eab6b2fa163e33e4b2',
            fRecommend: '0',
            categoryId: null,
            category: null,
            fStatus: '0',
            fId: '9ae8332653ac11eab6b2fa163e33e4b2',
            fName: '再生料',
            fLevel: 1,
            fParentId: null,
            fSeq: 4,
            fParentName: null,
            fOriginalStatus: null,
            fMaterialType: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fTopLevelId: '167b126f547e11eab6b2fa163e33e4b2',
            fRecommend: '1',
            categoryId: null,
            category: null,
            fStatus: '0',
            fId: '167b126f547e11eab6b2fa163e33e4b2',
            fName: '塑料制品',
            fLevel: 1,
            fParentId: null,
            fSeq: 9999999,
            fParentName: null,
            fOriginalStatus: null,
            fMaterialType: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fTopLevelId: '3c67fa0093ff11eab6b2fa163e33e4b2',
            fRecommend: '1',
            categoryId: null,
            category: null,
            fStatus: '0',
            fId: '3c67fa0093ff11eab6b2fa163e33e4b2',
            fName: '其它',
            fLevel: 1,
            fParentId: null,
            fSeq: 10000000,
            fParentName: null,
            fOriginalStatus: null,
            fMaterialType: null
          }
        ],
        secondMaterials: [
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fTopLevelId: '5725c805513311eab6b2fa163e33e4b2',
            fRecommend: '0',
            categoryId: null,
            category: null,
            fStatus: '0',
            fId: 'c8e04567516e11eab6b2fa163e33e4b2',
            fName: '通用塑料',
            fLevel: 2,
            fParentId: '5725c805513311eab6b2fa163e33e4b2',
            fSeq: 1,
            fParentName: '原材料',
            fOriginalStatus: null,
            fMaterialType: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fTopLevelId: '5725c805513311eab6b2fa163e33e4b2',
            fRecommend: '1',
            categoryId: null,
            category: null,
            fStatus: '0',
            fId: 'cd06c06a538311eab6b2fa163e33e4b2',
            fName: '工程塑料',
            fLevel: 2,
            fParentId: '5725c805513311eab6b2fa163e33e4b2',
            fSeq: 2,
            fParentName: '原材料',
            fOriginalStatus: null,
            fMaterialType: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fTopLevelId: '9ae8332653ac11eab6b2fa163e33e4b2',
            fRecommend: '1',
            categoryId: null,
            category: null,
            fStatus: '0',
            fId: 'b5cffbe753ac11eab6b2fa163e33e4b2',
            fName: '特种塑料',
            fLevel: 2,
            fParentId: '9ae8332653ac11eab6b2fa163e33e4b2',
            fSeq: 3,
            fParentName: '再生料',
            fOriginalStatus: null,
            fMaterialType: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fTopLevelId: '9ae8332653ac11eab6b2fa163e33e4b2',
            fRecommend: '1',
            categoryId: null,
            category: null,
            fStatus: '0',
            fId: 'bcaf839b53ac11eab6b2fa163e33e4b2',
            fName: '其它',
            fLevel: 2,
            fParentId: '9ae8332653ac11eab6b2fa163e33e4b2',
            fSeq: 4,
            fParentName: '再生料',
            fOriginalStatus: null,
            fMaterialType: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fTopLevelId: '167b126f547e11eab6b2fa163e33e4b2',
            fRecommend: '1',
            categoryId: null,
            category: null,
            fStatus: '0',
            fId: '26985e94547e11eab6b2fa163e33e4b2',
            fName: '涉及行业',
            fLevel: 2,
            fParentId: '167b126f547e11eab6b2fa163e33e4b2',
            fSeq: 9999,
            fParentName: '塑料制品',
            fOriginalStatus: null,
            fMaterialType: null
          }
        ],
        regions: [
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 130000,
            fNumber: '130000',
            fLevel: 1,
            fParentId: 1,
            fName: '河北省',
            fFullName: '河北省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 140000,
            fNumber: '140000',
            fLevel: 1,
            fParentId: 1,
            fName: '山西省',
            fFullName: '山西省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 150000,
            fNumber: '150000',
            fLevel: 1,
            fParentId: 1,
            fName: '内蒙古自治区',
            fFullName: '内蒙古自治区',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 210000,
            fNumber: '210000',
            fLevel: 1,
            fParentId: 1,
            fName: '辽宁省',
            fFullName: '辽宁省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 220000,
            fNumber: '220000',
            fLevel: 1,
            fParentId: 1,
            fName: '吉林省',
            fFullName: '吉林省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 230000,
            fNumber: '230000',
            fLevel: 1,
            fParentId: 1,
            fName: '黑龙江省',
            fFullName: '黑龙江省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 320000,
            fNumber: '320000',
            fLevel: 1,
            fParentId: 1,
            fName: '江苏省',
            fFullName: '江苏省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 330000,
            fNumber: '330000',
            fLevel: 1,
            fParentId: 1,
            fName: '浙江省',
            fFullName: '浙江省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 340000,
            fNumber: '340000',
            fLevel: 1,
            fParentId: 1,
            fName: '安徽省',
            fFullName: '安徽省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 350000,
            fNumber: '350000',
            fLevel: 1,
            fParentId: 1,
            fName: '福建省',
            fFullName: '福建省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 360000,
            fNumber: '360000',
            fLevel: 1,
            fParentId: 1,
            fName: '江西省',
            fFullName: '江西省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 370000,
            fNumber: '370000',
            fLevel: 1,
            fParentId: 1,
            fName: '山东省',
            fFullName: '山东省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 410000,
            fNumber: '410000',
            fLevel: 1,
            fParentId: 1,
            fName: '河南省',
            fFullName: '河南省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 420000,
            fNumber: '420000',
            fLevel: 1,
            fParentId: 1,
            fName: '湖北省',
            fFullName: '湖北省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 430000,
            fNumber: '430000',
            fLevel: 1,
            fParentId: 1,
            fName: '湖南省',
            fFullName: '湖南省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 440000,
            fNumber: '440000',
            fLevel: 1,
            fParentId: 1,
            fName: '广东省',
            fFullName: '广东省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 450000,
            fNumber: '450000',
            fLevel: 1,
            fParentId: 1,
            fName: '广西壮族自治区',
            fFullName: '广西壮族自治区',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 460000,
            fNumber: '460000',
            fLevel: 1,
            fParentId: 1,
            fName: '海南省',
            fFullName: '海南省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 510000,
            fNumber: '510000',
            fLevel: 1,
            fParentId: 1,
            fName: '四川省',
            fFullName: '四川省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 520000,
            fNumber: '520000',
            fLevel: 1,
            fParentId: 1,
            fName: '贵州省',
            fFullName: '贵州省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 530000,
            fNumber: '530000',
            fLevel: 1,
            fParentId: 1,
            fName: '云南省',
            fFullName: '云南省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 540000,
            fNumber: '540000',
            fLevel: 1,
            fParentId: 1,
            fName: '西藏自治区',
            fFullName: '西藏自治区',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 610000,
            fNumber: '610000',
            fLevel: 1,
            fParentId: 1,
            fName: '陕西省',
            fFullName: '陕西省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 620000,
            fNumber: '620000',
            fLevel: 1,
            fParentId: 1,
            fName: '甘肃省',
            fFullName: '甘肃省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 630000,
            fNumber: '630000',
            fLevel: 1,
            fParentId: 1,
            fName: '青海省',
            fFullName: '青海省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 640000,
            fNumber: '640000',
            fLevel: 1,
            fParentId: 1,
            fName: '宁夏回族自治区',
            fFullName: '宁夏回族自治区',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 650000,
            fNumber: '650000',
            fLevel: 1,
            fParentId: 1,
            fName: '新疆维吾尔自治区',
            fFullName: '新疆维吾尔自治区',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 1100001,
            fNumber: '1100001',
            fLevel: 1,
            fParentId: 1,
            fName: '北京市',
            fFullName: '北京市',
            fIsDirect: '1',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 1200001,
            fNumber: '1200001',
            fLevel: 1,
            fParentId: 1,
            fName: '天津市',
            fFullName: '天津市',
            fIsDirect: '1',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 3100001,
            fNumber: '3100001',
            fLevel: 1,
            fParentId: 1,
            fName: '上海市',
            fFullName: '上海市',
            fIsDirect: '1',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 5000001,
            fNumber: '5000001',
            fLevel: 1,
            fParentId: 1,
            fName: '重庆市',
            fFullName: '重庆市',
            fIsDirect: '1',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 5000012,
            fNumber: '5000012',
            fLevel: 1,
            fParentId: 1,
            fName: '澳门特别行政区',
            fFullName: '澳门特别行政区',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 5000015,
            fNumber: '5000015',
            fLevel: 1,
            fParentId: 1,
            fName: '香港特别行政区',
            fFullName: '香港特别行政区',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          },
          {
            createTime: null,
            updateTime: null,
            remark: null,
            params: {},
            fId: 5000018,
            fNumber: '5000018',
            fLevel: 1,
            fParentId: 1,
            fName: '台湾省',
            fFullName: '台湾省',
            fIsDirect: '0',
            parentName: '中国',
            province: null,
            city: null,
            area: null
          }
        ],
        thirdMaterials: [
          {
            fParentIds: [
              '3859aee0539411eab6b2fa163e33e4b2',
              'c8e04567516e11eab6b2fa163e33e4b2',
              'c8e04567516e11eab6b2fa163e33e4b2',
              '3859aee0539411eab6b2fa163e33e4b2',
              '3859aee0539411eab6b2fa163e33e4b2',
              'c8e04567516e11eab6b2fa163e33e4b2'
            ],
            category: 'PE',
            categoryDictCode: 237,
            fTopLevelIds: [
              '5725c805513311eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          },
          {
            fParentIds: [
              'c8e04567516e11eab6b2fa163e33e4b2',
              'a65e82e853ac11eab6b2fa163e33e4b2',
              '3859aee0539411eab6b2fa163e33e4b2'
            ],
            category: 'PP',
            categoryDictCode: 219,
            fTopLevelIds: [
              '9ae8332653ac11eab6b2fa163e33e4b2',
              '5725c805513311eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          },
          {
            fParentIds: [
              '3859aee0539411eab6b2fa163e33e4b2',
              'c8e04567516e11eab6b2fa163e33e4b2',
              'a65e82e853ac11eab6b2fa163e33e4b2'
            ],
            category: 'ABS',
            categoryDictCode: 220,
            fTopLevelIds: [
              '9ae8332653ac11eab6b2fa163e33e4b2',
              '5725c805513311eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          },
          {
            fParentIds: ['a65e82e853ac11eab6b2fa163e33e4b2'],
            category: 'PVC',
            categoryDictCode: 221,
            fTopLevelIds: ['9ae8332653ac11eab6b2fa163e33e4b2']
          },
          {
            fParentIds: [
              'a65e82e853ac11eab6b2fa163e33e4b2',
              '3859aee0539411eab6b2fa163e33e4b2'
            ],
            category: 'HIPS',
            categoryDictCode: 222,
            fTopLevelIds: [
              '9ae8332653ac11eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          },
          {
            fParentIds: ['a65e82e853ac11eab6b2fa163e33e4b2'],
            category: 'GPPS',
            categoryDictCode: 223,
            fTopLevelIds: ['9ae8332653ac11eab6b2fa163e33e4b2']
          },
          {
            fParentIds: [
              'adf2b62c53ac11eab6b2fa163e33e4b2',
              '907628fc53a911eab6b2fa163e33e4b2',
              'cd06c06a538311eab6b2fa163e33e4b2'
            ],
            category: 'PC',
            categoryDictCode: 226,
            fTopLevelIds: [
              '9ae8332653ac11eab6b2fa163e33e4b2',
              '5725c805513311eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          },
          {
            fParentIds: [
              'adf2b62c53ac11eab6b2fa163e33e4b2',
              '907628fc53a911eab6b2fa163e33e4b2',
              'cd06c06a538311eab6b2fa163e33e4b2'
            ],
            category: 'PA',
            categoryDictCode: 227,
            fTopLevelIds: [
              '9ae8332653ac11eab6b2fa163e33e4b2',
              '5725c805513311eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          },
          {
            fParentIds: [
              'adf2b62c53ac11eab6b2fa163e33e4b2',
              '907628fc53a911eab6b2fa163e33e4b2'
            ],
            category: 'PET',
            categoryDictCode: 228,
            fTopLevelIds: [
              '9ae8332653ac11eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          },
          {
            fParentIds: [
              '907628fc53a911eab6b2fa163e33e4b2',
              'cd06c06a538311eab6b2fa163e33e4b2',
              'adf2b62c53ac11eab6b2fa163e33e4b2'
            ],
            category: 'PBT',
            categoryDictCode: 229,
            fTopLevelIds: [
              '9ae8332653ac11eab6b2fa163e33e4b2',
              '5725c805513311eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          },
          {
            fParentIds: ['adf2b62c53ac11eab6b2fa163e33e4b2'],
            category: 'PMMA',
            categoryDictCode: 230,
            fTopLevelIds: ['9ae8332653ac11eab6b2fa163e33e4b2']
          },
          {
            fParentIds: [
              '907628fc53a911eab6b2fa163e33e4b2',
              'adf2b62c53ac11eab6b2fa163e33e4b2'
            ],
            category: 'POM',
            categoryDictCode: 231,
            fTopLevelIds: [
              '9ae8332653ac11eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          },
          {
            fParentIds: [
              '907628fc53a911eab6b2fa163e33e4b2',
              'adf2b62c53ac11eab6b2fa163e33e4b2'
            ],
            category: '合金',
            categoryDictCode: 232,
            fTopLevelIds: [
              '9ae8332653ac11eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          },
          {
            fParentIds: [
              'b5cffbe753ac11eab6b2fa163e33e4b2',
              'fdf6662153a911eab6b2fa163e33e4b2'
            ],
            category: 'PPO',
            categoryDictCode: 233,
            fTopLevelIds: [
              '9ae8332653ac11eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          },
          {
            fParentIds: ['b5cffbe753ac11eab6b2fa163e33e4b2'],
            category: 'PEEK',
            categoryDictCode: 234,
            fTopLevelIds: ['9ae8332653ac11eab6b2fa163e33e4b2']
          },
          {
            fParentIds: [
              'b5cffbe753ac11eab6b2fa163e33e4b2',
              'fdf6662153a911eab6b2fa163e33e4b2'
            ],
            category: 'PPS',
            categoryDictCode: 235,
            fTopLevelIds: [
              '9ae8332653ac11eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          },
          {
            fParentIds: [
              'bcaf839b53ac11eab6b2fa163e33e4b2',
              '06d9eebe53aa11eab6b2fa163e33e4b2'
            ],
            category: '弹性体',
            categoryDictCode: 236,
            fTopLevelIds: [
              '9ae8332653ac11eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          },
          {
            fParentIds: ['c8e04567516e11eab6b2fa163e33e4b2'],
            category: 'PS',
            categoryDictCode: 238,
            fTopLevelIds: ['5725c805513311eab6b2fa163e33e4b2']
          },
          {
            fParentIds: [
              'fdf6662153a911eab6b2fa163e33e4b2',
              'b5cffbe753ac11eab6b2fa163e33e4b2',
              '06d9eebe53aa11eab6b2fa163e33e4b2',
              '97872aa589d911eab6b2fa163e33e4b2',
              'bcaf839b53ac11eab6b2fa163e33e4b2'
            ],
            category: '其它',
            categoryDictCode: 217,
            fTopLevelIds: [
              '9ae8332653ac11eab6b2fa163e33e4b2',
              '5725c805513311eab6b2fa163e33e4b2',
              '25516cf4539411eab6b2fa163e33e4b2'
            ]
          }
        ]
      }
    }
  }
}

/** ************************* 市场供求 end ************************/
