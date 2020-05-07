const path = require('path')
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
        path: path.resolve(__dirname, 'dist')
    },
  // plugins: [
  //   new CopyPlugin([
  //     { from: 'src/a.js', to: './'}
  //   ])
  // ]
}