
var webpack = require('webpack');
var path = require('path');

module.exports = {

  devtool: "eval-source-map",

  entry:  [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8099',
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js"//打包后输出文件的文件名
  },

  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    // colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port: 8099
  } 


}
//注：“__dirname”是Node.js中的一个全局变量，它指向当前执行脚本所在的目录。