"use strict";
const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const PUBLIC_PATH = "/";
const DIR_DIST = "dist";
const DIR_ASSETS = "static";
module.exports = webpackMerge(webpackBaseConfig, {
    mode: "production",
    devtool: "#source-map",
    output: {
        path: resolve(DIR_DIST),
        publicPath: PUBLIC_PATH,
        filename: `${DIR_ASSETS}/js/[name].[chunkhash].js`
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": "prod"
        }),
        new CleanWebpackPlugin({
            dry: false,
            dangerouslyAllowCleanPatternsOutsideProject: true
        }),
        new HTMLWebpackPlugin({
            filename: resolve(`${DIR_DIST}/index.html`),
            template: "index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: "dependency"
        })
    ]
});
