'use strict'
const { resolve } = require('path')
module.exports = {
    entry: [
        resolve('src/main.js')
    ],
    resolve: {
        extensions: [ '.js' ],
        alias: {
            src: resolve('src'),
            app: resolve('src/app'),
            components: resolve('src/app/components'),
            reducers: resolve('src/app/reducers'),
            actions: resolve('src/app/actions')
        }
    }
}