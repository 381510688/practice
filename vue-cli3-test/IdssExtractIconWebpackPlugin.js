const { parse } = require('@babel/core')
const PLUGIN_NAME = 'IdssExtractIconWebpackPlugin'

class IdssExtractIconWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(PLUGIN_NAME, (compilation, callback) => {
      // compilation.chunks 存放所有代码块，是一个数组
      compilation.chunks.forEach(function (chunk) {
        // Webpack 会根据 Chunk 去生成输出的文件资源，每个 Chunk 都对应一个及其以上的输出文件
        // 例如在 Chunk 中包含了 CSS 模块并且使用了 ExtractTextPlugin 时，
        // 该 Chunk 就会生成 .js 和 .css 两个文件
        chunk.files.forEach(function (filename) {
          // compilation.assets 存放当前所有即将输出的资源
          // 调用一个输出资源的 source() 方法能获取到输出资源的内容
          console.log(filename)
          if (/\.js$/.test(filename)) {
            let source = compilation.assets[filename].source()
            let ast = parse(source)

            filename === 'js/about.js' && console.log(source)

          }
         
        })
      })
      callback()
    })
  }
}


// const { parse } = require('@babel/core')

// const PLUGIN_NAME = 'IdssExtractIconWebpackPlugin'

// // 一个 JavaScript 命名函数。
// function IdssExtractIconWebpackPlugin (options) {
// }

// // 在插件函数的 prototype 上定义一个 `apply` 方法。
// IdssExtractIconWebpackPlugin.prototype.apply = function (compiler) {
  

//   compiler.hooks.normalModuleFactory.tap(PLUGIN_NAME, (compiler) => {
//     console.log(compiler)
//     // if (/\.js$/.test(file)) {
//     //   console.log(file)
//     //   console.log(info)
//     // }
//   })


//   // compiler.hooks.compilation.tap(PLUGIN_NAME, function (compilation) {

//   //   // compilation.hooks.normalModuleLoader.tap(PLUGIN_NAME, function (loaderContext, module) {
//   //   //   console.log(loaderContext, module)
//   //   // })


//   //   console.log(compilation.getAssets())

//   //   // compilation.chunks 存放所有代码块，是一个数组
//   //   compilation.chunks.forEach(function(chunk) {
//   //       // chunk 代表一个代码块
//   //       // 代码块由多个模块组成，通过 chunk.forEachModule 能读取组成代码块的每个模块
//   //       // chunk.forEachModule(function (module) {
//   //       //   // console.log(module)
//   //       // })

//   //       // Webpack 会根据 Chunk 去生成输出的文件资源，每个 Chunk 都对应一个及其以上的输出文件
//   //       // 例如在 Chunk 中包含了 CSS 模块并且使用了 ExtractTextPlugin 时，
//   //       // 该 Chunk 就会生成 .js 和 .css 两个文件
//   //       chunk.files.forEach(function (filename) {

        

//   //         // compilation.assets 存放当前所有即将输出的资源
//   //         // 调用一个输出资源的 source() 方法能获取到输出资源的内容
//   //         if (/\.js$/.test(filename)) {
//   //           console.log(filename)
//   //           console.log('---------')
//   //           let source = compilation.assets[filename].source()
//   //           console.log(source)
//   //         }
//   //       })

//   //   })
//   // })

// }

module.exports = IdssExtractIconWebpackPlugin
