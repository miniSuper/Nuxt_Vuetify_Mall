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
    title: '最有料 - 买改性塑料,就上最有料',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
  css: ['~/assets/styles/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~plugins/element-ui.js',
      ssr: true
    }
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
