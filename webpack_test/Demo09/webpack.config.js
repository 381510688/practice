/**
 * Created by ligang on 16/9/18.
 */
var webpack = require("webpack");

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false"))
});

module.exports = {
    entry: "./main.js",
    output: {
        filename: "bundle.js"
    },
    plugins: [devFlagPlugin]
};