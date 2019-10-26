"use strict";
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = webpackMerge(webpackBaseConfig, {
    mode: "development",
    devServer: {
        hot: true,
        host: "0.0.0.0",
        watchOptions: {
            poll: true
        },
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": "dev"
        }),
        new HTMLWebpackPlugin({
            template: "index.html",
            filename: "index.html",
            inject: true
        })
    ]
});
