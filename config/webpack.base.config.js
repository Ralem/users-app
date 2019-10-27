"use strict";
const { resolve } = require("path");
const stylusLoader = require("stylus-loader");
module.exports = {
    entry: [resolve("src/main.js")],
    resolve: {
        extensions: [".js", ".styl"],
        alias: {
            src: resolve("src"),
            app: resolve("src/app"),
            components: resolve("src/app/components"),
            reducers: resolve("src/app/reducers"),
            actions: resolve("src/app/actions"),
            style: resolve("src/style"),
            assets: resolve("src/assets")
        }
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "eslint-loader",
                enforce: "pre",
                include: [resolve("src")],
                options: {
                    formatter: require("eslint-formatter-pretty")
                }
            },
            {
                test: /\.js?$/,
                loader: "babel-loader",
                include: [resolve("src")]
            },
            {
                test: /\.html$/,
                loader: [
                    {
                        loader: "html-loader",
                        options: { interpolate: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new stylusLoader.OptionsPlugin({
            default: {
                use: [require("nib")(), require("rupture")()],
                import: [
                    "~nib/lib/nib/index.styl",
                    "~rupture/rupture/index.styl"
                ]
            }
        })
    ]
};
