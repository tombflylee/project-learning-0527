let webpack = require('webpack');
let path = require('path');
module.exports = {
  entry: [
  'react-hot-loader/patch',
  'webpack-hot-middleware/client?reload=true',// webpack-hot-middleware的配置
    // 这里reload=true的意思是，如果碰到不能hot reload的情况，就整页刷新。
  './app/index.js'
  ],

  output: {
    path: path.resolve(__dirname,'./app'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }
  ]
  },
  plugins: [// webpack-hot-middleware需要的配置
    new webpack.HotModuleReplacementPlugin(),
    // 启用热替换,仅开发模式需要

    new webpack.NoErrorsPlugin()
    // 允许错误不打断程序，,仅开发模式需要

  ]
}