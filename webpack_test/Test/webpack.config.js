/**
 * Created by ligang on 17/6/1.
 */
const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: path.resolve(__dirname, 'src/script/main.js'),
    entry: {
        main: path.resolve(__dirname, 'src/script/main.js'),
        index: path.resolve(__dirname, 'src/script/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
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
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            inject: 'head'
        })
    ]
};