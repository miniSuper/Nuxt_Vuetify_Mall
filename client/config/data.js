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
    path: '',
    url: domain + '/HomeIndex'
  },
  {
    name: '原材料交易',
    path: '',
    url: domain + '/MaterialTransaction'
  },
  {
    name: '改性料交易',
    path: '/ModifiedTransaction',
    url: domain + '/ModifiedTransaction'
  },
  {
    name: '企业库',
    path: '',
    url: domain + '/CompanyService'
  },
  {
    name: '我的企业',
    path: '',
    url: domain + '/PersonalCenter'
  }
]
export const quickLinks = [
  { name: '关于我们', url: domain + '/AboutUs', path: '/footer/AboutUs' },
  {
    name: '法律声明',
    url: domain + '/LegalNotice',
    path: '/footer/LegalNotice'
  },
  {
    name: '隐私保护',
    url: domain + '/PrivacyProtection',
    path: '/footer/PrivacyProtection'
  },
  {
    name: '帮助中心',
    url: domain + '/HelpCenter',
    path: '/footer/HelpCenter'
  }
]
