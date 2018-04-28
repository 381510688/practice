/**
 * Created by ligang on 2018/4/27.
 */
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: {
    main: './main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[hash:8].js',
    chunkFilename: '[id]-[hash:1].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': './'
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [{
        loader: 'vue-loader'
      }],
      exclude: [path.resolve(__dirname, 'node_modules')]
    }, {
      test: /\.js$/,
      use: 'babel-loader?cacheDirectory=true',
      exclude: [path.resolve(__dirname, 'node_modules')],
      // options: {
      //   // cacheDirectory: true,
      //   // presets: ["es2015"]
      // },
      enforce: 'post'
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
        use: ['css-loader']
      })
    }]
  },
  plugins: [
    // 清空文件夹
    new CleanWebpackPlugin('dist'),
    new VueLoaderPlugin(),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css' //放到dist/css/下
    })
  ],
  // devtool: 'source-map' // 输出 source-map 方便直接调试 ES6 源码
}
