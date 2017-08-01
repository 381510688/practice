/**
 * Created by ligang on 17/6/1.
 */
const path = require('path');
var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // entry: path.resolve(__dirname, 'src/script/main.js'),
    entry: {
        vendor: ['vue', 'vuex'],
        main: path.resolve(__dirname, '../src/script/main.js'),
        index: path.resolve(__dirname, '../src/script/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name]-[hash].boundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /\.(csv|tsv)$/,
            use: ['csv-loader']
        }, {
            test: /\.xml$/,
            use: ['xml-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['../dist']),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body' // 'head'
        }),
        // 提前公共代码
        // 教程: https://doc.webpack-china.org/guides/code-splitting-libraries/#commonschunkplugin
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor", // entry中的vendor
            minChunks: Infinity,
            // filename: 'common.js' // 文件名，默认output.filename || output.chunkFilename
        })
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"), // 配置根目录
        port: 8888,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        compress: true, // 启动gzip压缩
        disableHostCheck: true, // 支持局域网访问
        host: "0.0.0.0", // 支持局域网访问
        inline: true // 热部署方式
    }
};