/**
 * Created by ligang on 17/6/1.
 */
const path = require('path');
var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');


module.exports = {
    // entry: path.resolve(__dirname, 'src/script/main.js'),
    entry: {
        vendor: ['vue', 'vuex'], // 显式的
        main: path.resolve(__dirname, '../src/script/main.js'),
        index: path.resolve(__dirname, '../src/script/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        // filename: 'js/[name]-[hash].boundle.js'
        filename: 'js/[name]-[chunkhash].boundle.js'
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
                    /**
                     *  http://2ality.com/2015/12/webpack-tree-shaking.html
                     *  https://www.zhihu.com/question/41922432
                     */
                    // presets: ["es2015"],
                    plugins: [
                        'transform-es2015-template-literals',
                        'transform-es2015-literals',
                        'transform-es2015-function-name',
                        'transform-es2015-arrow-functions',
                        'transform-es2015-block-scoped-functions',
                        'transform-es2015-classes',
                        'transform-es2015-object-super',
                        'transform-es2015-shorthand-properties',
                        'transform-es2015-computed-properties',
                        'transform-es2015-for-of',
                        'transform-es2015-sticky-regex',
                        'transform-es2015-unicode-regex',
                        'check-es2015-constants',
                        'transform-es2015-spread',
                        'transform-es2015-parameters',
                        'transform-es2015-destructuring',
                        'transform-es2015-block-scoping',
                        'transform-es2015-typeof-symbol',
                        ['transform-regenerator', { async: false, asyncGenerators: false }],
                    ]
                }
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: 'css-loader'
            })
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        // 提前公共代码
        // 教程: https://doc.webpack-china.org/guides/code-splitting-libraries/#commonschunkplugin
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor", // entry中的vendor
            minChunks: Infinity,
            // name: 'common',
            // filename: 'common.js' // 文件名，默认output.filename || output.chunkFilename
        }),

        // 提取样式文件
        // 教程：https://doc.webpack-china.org/plugins/extract-text-webpack-plugin/
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body' // 'head'
        }),
        // 生成manifest文件
        // https://github.com/danethurber/webpack-manifest-plugin
        new ManifestPlugin()

    ],
    devtool: 'inline-source-map',
};