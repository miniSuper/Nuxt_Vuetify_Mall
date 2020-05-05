const colors = require('vuetify/es5/util/colors').default
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const ENV_CONFIG = dotenv.parse(
  fs.readFileSync(path.join(__dirname, 'client', '.env.' + process.env.mode))
)
console.log('ENV_CONFIG', ENV_CONFIG)
module.exports = {
  mode: 'universal',
  srcDir: 'client/',
  env: {
    NODE_ENV: ENV_CONFIG.NODE_ENV
  },
  HOST: ENV_CONFIG.HOST,
  PORT: ENV_CONFIG.PORT,
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
    title: '最有料-人脉库 化工高分子原材料交易平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '最有料科技有限公司专注于工程塑料、高性能塑料呆滞原料交易。依托互联网平台，高效匹配供需双方，为买家提供低价、正品原料；为卖家高效、快捷处理呆滞库存，交易呆滞原料全部【原厂原包】'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '高分子材料、塑料、化工高分子、互联网交易平台'
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
  css: ['~/assets/styles/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
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
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
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
