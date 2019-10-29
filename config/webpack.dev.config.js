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
    module: {
        rules: [
            {
                test: /\.styl?$/,
                use: ["style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.css?$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: "url-loader",
                options: {
                    limit: 8000,
                    name: "img/[name].[ext]"
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 8000,
                    name: "fonts/[name].[ext]"
                }
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: "development"
        }),
        new HTMLWebpackPlugin({
            template: "index.html",
            filename: "index.html",
            inject: true
        })
    ]
});
