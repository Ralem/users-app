"use strict";
const { resolve } = require("path");
module.exports = {
    entry: [resolve("src/main.js")],
    resolve: {
        extensions: [".js"],
        alias: {
            src: resolve("src"),
            app: resolve("src/app"),
            components: resolve("src/app/components"),
            reducers: resolve("src/app/reducers"),
            actions: resolve("src/app/actions")
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
            }
        ]
    }
};
