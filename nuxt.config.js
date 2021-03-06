const colors = require('vuetify/es5/util/colors').default
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const ENV_CONFIG = dotenv.parse(
  fs.readFileSync(path.join(__dirname, 'client', '.env.' + process.env.mode))
)
module.exports = {
  mode: 'universal',
  srcDir: 'client/',
  env: {
    NODE_ENV: process.env.mode // 部署的时候 这里mode变量的值 是pm2.config.js那里传入的  开发的时候  是package.js 的命令行传入的
  },
  HOST: ENV_CONFIG.HOST,
  PORT: ENV_CONFIG.PORT,
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
    title: '最有料 - 买改性塑料,就上最有料',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'renderer',
        content: 'webkit' // 默认使用极速模式，作用于360浏览器、QQ浏览器等国产双核浏览器
      },
      {
        name: 'force-rendering',
        content: 'webkit' // 默认使用极速模式，作用于其他双核浏览器
      },
      {
        name: 'X-UA-Compatible',
        content: 'IE=edge,chrome=1' // 如果有安装 Google Chrome Frame 插件则默认使用Chromium内核（也就是极速模式内核），否则强制本机支持的最高版本IE内核，作用于IE浏览器
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '最有料塑料交易平台，专注于塑化行业交易的服务平台。以供应链、资金支持交易服务，以SaaS工具赋能企业工业升级服务的工业互联网平台。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '塑料，新材料、塑料行情，塑料原材料，原材料交易，改性料，改性塑料，最有料'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', '~/assets/styles/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/element-ui.js', ssr: true },
    { src: '~/plugins/vue-extend.js' }
    // { src: '~/plugins/router.js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: '.env.' + process.env.mode }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  proxy: {
    // '/api': {
    //   target: 'https://vip.zuiyouliao.com', // 目标接口域名
    //   changeOrigin: true, // 表示是否跨域
    //   pathRewrite: {
    //     '^/api': '/' // 把 /api 替换成 /
    //   }
    // }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
