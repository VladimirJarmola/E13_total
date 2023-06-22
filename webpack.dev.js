const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devServer: {
        static: './dist',
        port: 3001,
        open: false,
        hot: true
    },
    devtool: 'inline-source-map',
    mode: 'development',
});