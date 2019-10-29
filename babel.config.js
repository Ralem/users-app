module.exports = function(api) {
    api.cache(true);
    const presets = [
        [
            "@babel/preset-env",
            {
                modules: false,
                useBuiltIns: "usage",
                corejs: 3
            }
        ],
        "@babel/preset-react"
    ];
    const plugins = [
        [
            "@babel/plugin-proposal-decorators",
            {
                legacy: true
            }
        ],
        "@babel/plugin-proposal-function-sent",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-throw-expressions",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread"
    ];
    return { presets, plugins };
};
