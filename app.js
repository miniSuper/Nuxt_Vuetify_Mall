const path = require('path')
module.exports = {
  apps: [
    {
      name: 'pc',
      script: path.join(__dirname, './server/index.js'),
      watch: true,
      env: {
        PORT: 5000,
        NODE_ENV: 'production'
      },
      env_dev: {
        PORT: 5000,
        NODE_ENV: 'development'
      },
      env_test: {
        PORT: 5000,
        NODE_ENV: 'test'
      }
    }
  ]
}
