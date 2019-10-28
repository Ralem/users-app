"use strict";
const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

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
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    compress: {
                        drop_console: true
                    }
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.styl?$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "stylus-loader"
                ]
            },
            {
                test: /\.css?$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: "url-loader",
                options: {
                    limit: 1000,
                    name: `${DIR_ASSETS}/img/[name].[hash].[ext]`
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 1000,
                    name: `${DIR_ASSETS}/fonts/[name].[hash].[ext]`
                }
            }
        ]
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
        }),
        new MiniCSSExtractPlugin({
            filename: `${DIR_ASSETS}/css/[name].[hash].css`
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: { map: { inline: false, annotation: true } }
        }),
        new CopyWebpackPlugin([
            {
                from: resolve("static"),
                to: DIR_ASSETS,
                ignore: [".*"]
            }
        ])
    ]
});
