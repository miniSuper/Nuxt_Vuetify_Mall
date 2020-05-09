import { domain } from './index'

export const headerList = [
  {
    name: '登录',
    iconPath: '/images/login.png',
    url: domain + '/Login'
  },
  {
    name: '注册',
    iconPath: '/images/register.png',
    url: domain + '/Reg'
  },
  {
    name: '购物车',
    iconPath: '/images/shopCarts.png',
    url: domain + '/Login'
  },
  {
    name: '消息',
    iconPath: '/images/info.png',
    url: domain + '/Login'
  }
]
export const navList = [
  {
    name: '首页',
    path: '/HomeIndex',
    url: domain + '/HomeIndex'
  },
  {
    name: '原材料交易',
    path: '/MaterialTransaction',
    url: domain + '/MaterialTransaction'
  },
  {
    name: '改性料交易',
    path: '/ModifiedTransaction',
    url: domain + '/ModifiedTransaction'
  },
  {
    name: '企业库',
    path: '/CompanyService',
    url: domain + '/CompanyService'
  },
  {
    name: '我的企业',
    path: '/PersonalCenter',
    url: domain + '/PersonalCenter'
  }
]
export const quickLinks = [
  { name: '关于我们', path: domain + '/AboutUs' },
  { name: '法律声明', path: domain + '/LegalNotice' },
  { name: '隐私保护', path: domain + '/PrivacyStatement' },
  { name: '帮助中心', path: domain + '/HelpCenter' }
]
