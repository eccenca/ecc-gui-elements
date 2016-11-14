var path = require('path');

module.exports = {
    path: path.join(__dirname, 'ui-test'),
    testEntryPoint: path.join(__dirname, 'test', 'index.jsx'),
    webpackConfig: {
        common: {
            context: path.resolve(__dirname),
        },
        debug: {
            entry: './ui-test/ui-test.jsx',
            output: {
                path: path.join(__dirname, 'ui-test'),
                filename: 'component.min.js',
            },
        },
        production: {
            entry: {
                'component': './index.js',
                'style-core': './style/style-core.js',
            },
            output: {
                path: path.join(__dirname, 'es5'),
                filename: '[name].js',
                libraryTarget: 'commonjs2',
            },
            prependSCSS: 'component.js',
        },
    },
    lintingFiles: [
        './src/**/*',
        './test/**/*',
        './ui-test/**/*',
        './index.js',
    ],
};
