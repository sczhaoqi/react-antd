
/*
   开发配置文件
*/
const ip = require('ip').address();
const utils = require('../build/utils');
const resolve = utils.resolve(__dirname, '../');
module.exports = {
   common: {
      context: resolve(''),
      sourceCode: resolve('src'),
      // 封装的请求模块位置，用于注入请求与服务器地址
      requestModule: resolve('src/api/request.js')
   },
   development: {
      env: { NODE_ENV: JSON.stringify('development') },
      port: process.env.PORT || 3000, // 设置开发时端口号
      devServerIp: ip,
      basicRequestLink: `http://${ip}:3000`,
      entryPath: null, // 默认为 './src/index.js'
      assetsRoot: resolve('dev'), // 编译后的静态资源路径
      assetsSubDirectory: 'static', // 二级资源路径
      assetsPublicPath: '/' // 编译发布的根目录
   },
   production: {
      env: { NODE_ENV: JSON.stringify('production') },
      basicRequestLink: `http://${ip}:3000`, // 生产时设置为服务器地址
      entryPath: null, // 默认为 './src/index.js'
      assetsRoot: resolve('dist'), // 编译后的静态资源路径
      assetsSubDirectory: 'static',
      assetsPublicPath: '/test/', // 发布到哪个目录下就写哪里 最后要加上 /
      needWorkboxSW: true, // 是否需要 workbox 配置 service worker
      workboxConfig: null, // workbox 配置 null 表示默认配置
      productionSourceMap: false, // js sourceMap
      bundleAnalyzerReport: utils.shouldReport() // 是否显示 report
   }
}