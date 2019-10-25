const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  module: {  // 模块相关配置
    rules: [ // 配置模块loaders，解析规则
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true, // 该选项的作用所有的404都连接到index.html
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 最终创建的文件名
      template: path.join(__dirname, 'src/template.html') // 指定模板路径
    })
  ]
}

/**
 * sourceMap 配置
 * cheap-module-eval-source-map 开发环境
 * cheap-module-source-map 生产环境
 */