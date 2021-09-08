const path = require('path')
const webpack = require('webpack')
// module.exports = {
//     entry: './index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'index.bundle.js',
//         library: 'MyLibrary',
//         libraryTarget: "umd"
//     }
// }
// const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        publicPath: 'dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    optimization: {
      usedExports: true
    },
    plugins: [
      // new webpack.optimize.ModuleConcatenationPlugin()
    ]
}