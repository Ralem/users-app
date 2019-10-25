// http://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: [
        'standard',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
    globals: {
        App: true,
        document: true,
        window: true,
        TweenMax: true,
        TweenLite: true,
        TimelineMax: true,
        Sine: true,
        Power0: true,
        Power1: true,
        Power2: true,
        Power3: true,
        Power4: true,
        Back: true,
        Elastic: true,
        Linear: true,
        Expo: true,
    },
    // Add custom rules here
    rules: {
        'comma-dangle': ['off'],
        'padded-blocks': 0,
        'no-unused-vars': ['warn'],
        'no-undef': ['warn'],
        'quotes': ['off'],
        'no-console': ['off'],
        'max-len': ['off'],
        'semi': ['off', 'always'],
        'space-before-blocks': ['off'],
        'space-before-function-paren': ['off'],
        'camelcase': ['warn'],
        'comma-style': ['warn', 'last'],
        'spaced-comment': ['off'],
        "react/jsx-uses-vars": 2,
        "react/jsx-uses-react": 2,
        "react/react-in-jsx-scope": 1,
        'indent': [1, 4, {
          'SwitchCase': 1
        }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    },
    settings: {
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            version: 'lastest'
        },
        propWrapperFunctions: [ 'forbidExtraProps' ]
    }
}
