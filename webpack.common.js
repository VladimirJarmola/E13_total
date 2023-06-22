const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {esModule: true,}
                    }, 'css-loader',
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
           
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin(
            {
                title: 'Development',
                template: './dist/index.html',
                filename: 'index.html',
                
            }
        ),
        new TerserWebpackPlugin(),
        new ESLintPlugin(),
        new StyleLintPlugin({
            exclude: '/node_modules/',
            extensions: 'css',
            configFile: '.stylelintrc',
            context: 'src',
            files: '**/*.css',
            failOnError: false,
            quiet: false,        
            emitErrors: true,
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin(),
            new CssMinimizerPlugin(),
        ]
    },
    
}
