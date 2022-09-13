const  path = require('path');
module.exports = {
  devServer: {
    // 设置服务入口，localhost:9000就可以直接访问public和dist里面的资源文件了
    contentBase:[path.resolve(__dirname,'public'),path.resolve(__dirname,'dist')],
  },

};
