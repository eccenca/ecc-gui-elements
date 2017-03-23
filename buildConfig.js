var path = require('path');

module.exports = {
    testEntryPoint: path.join(__dirname, 'test', 'index.jsx'),
    webpackConfig: {
        common: {
            context: path.resolve(__dirname),
        },
        debug: {
            entry: './ui-test/ui-test.jsx',
            output: {
                filename: 'component.min.js',
            },
        },
        production: {
            entry: './index.js',
            output: {
                path: path.join(__dirname, 'es5'),
                filename: 'component.js',
                libraryTarget: 'commonjs2',
            },
        },
    },
    lintingFiles: [
        './src/**/*',
        './test/**/*',
        './ui-test/**/*',
        './index.js',
    ],
};
