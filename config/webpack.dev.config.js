'use strict'
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')
module.exports = webpackMerge(webpackBaseConfig, {
    mode: 'development',
    devServer: {
        hot: true,
        host: '0.0.0.0',
        watchOptions: {
            poll: true,
        },
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': 'dev'
        })
    ]
})