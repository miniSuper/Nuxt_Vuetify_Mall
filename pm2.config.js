const path = require('path')
module.exports = {
  apps: [
    {
      name: 'pcweb',
      script: path.join(__dirname, './server/index.js'),
      watch: true,
      env: {
        mode: 'production'
      },
      env_dev: {
        mode: 'development'
      },
      env_test: {
        mode: 'test'
      }
    }
  ]
}
