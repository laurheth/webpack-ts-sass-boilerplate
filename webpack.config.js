const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// src and dist directories
const src='src';
const dist='dist';

module.exports = {
    entry: `${path.resolve(__dirname, src)}/index.ts`,
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ],
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, dist),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: `${path.resolve(__dirname, dist)}/index.html`,
            title: 'Webpack Boilerplate',
            pageHeader: 'Webpack Boilerplate',
            template: `${path.resolve(__dirname, src)}/index.html`
        })
    ]
};