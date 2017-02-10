/**
 * Created by ligang on 16/9/5.
 */
var Htmlwebpackplugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: "./main.js",
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new Htmlwebpackplugin({
            title: "webpack-demos",
            filename: "index.html"
        }),
        new OpenBrowserPlugin({
            url: "http://localhost:8080"
        })
    ]
};