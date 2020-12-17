// const iconConfig = require('./icon.config.js')
// const IdssExtractIconWebpackPlugin = require('./IdssExtractIconWebpackPlugin.js')
const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use(path.resolve(__dirname, './svg-loader'))
        .loader(path.resolve(__dirname, './svg-loader'))
        .end()
      // .rule('vue')
      // .use('vue-loader')
      //   .loader('vue-loader')
      //   .tap(options => {
      //     options.loaders = {
      //       js: path.resolve(__dirname, './svg-loader')
      //     }
      //     // 修改它的选项...
      //     options.preLoaders = {
      //       html: path.resolve(__dirname, './svg-loader')
      //     }
      //     return options
      //   })


    // const vueRule = config.module.rule('vue')
    // vueRule.uses.clear()

    // vueRule
    //   .oneOf('inline')
    //   .resourceQuery(/inline/)
    //   .use('vue-svg-loader')
    //   .loader('vue-svg-loader')
    //   .end()
    //   .end()
    //   .oneOf('external')
    //   .use('file-loader')
    //   .loader('file-loader')
    //   .options({
    //     name: 'assets/[name].[hash:8].[ext]'
    //   })
  },  
  configureWebpack: {
    plugins: [
      // new IdssExtractIconWebpackPlugin()
    ]
  }
}