/**
 * Created by ligang on 16/9/2.
 */
var webpack = require("webpack");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    entry: "./main.js",
    output: {
        filename: "bundle.js"
    },
    // 压缩JS
    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};