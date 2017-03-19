
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  devtool: false,

  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },

  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"//不能只写json,json文件不能有注释
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin('css-loader?modules')//添加样式，注：感叹号的作用在于使同一文件能够使用不同类型的loader
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'//在webpack的module部分的loaders里进行配置即可
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("style.css")
  ],

  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port: 8099
  }


}
//注：“__dirname”是Node.js中的一个全局变量，它指向当前执行脚本所在的目录。