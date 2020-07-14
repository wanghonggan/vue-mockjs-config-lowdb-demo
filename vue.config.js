module.exports = {
  devServer: {
    before(app) {
      // 判断是否为开发环境
      if (process.env.NODE_ENV.toUpperCase() === 'DEVELOPMENT') {
        // 如果需要获取到 post 请求参数，把下面这行代码的注释解开
        app.use(require('body-parser').json()); // 把 post 请求参数解析为 json 格式
        app.use(require('@andremao/mockjs-config')); // 挂上中间件
      }
    },
  },
};
