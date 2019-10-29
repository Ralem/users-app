const webpackBaseConfig = require("../config/webpack.base.config");
const { module: devModule } = require("../config/webpack.dev.config");
const webpackMerge = require("webpack-merge");
module.exports = webpackMerge(webpackBaseConfig, { module: devModule });
