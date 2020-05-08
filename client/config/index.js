const mode = process.env.mode

// 正式环境
let domain = 'http://vip.zuiyouliao.com'

// 开发和测试环境
if (mode === 'development' || mode === 'test') {
  domain = 'http://192.168.140.130:9008'
}

export default {
  domain
}
