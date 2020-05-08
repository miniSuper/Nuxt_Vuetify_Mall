export const domain =
  process.env.mode === 'production'
    ? 'http://vip.zuiyouliao.com'
    : process.env.mode === 'test'
      ? 'http://192.168.140.130:9008'
      : 'http://192.168.140.130:9008'
