const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

// src and dist directories
const src='src';
const dist='dist';
const assets='assets';

// App title
const title='Webpack/TS/Sass Boilerplate';

module.exports = {
    // Entrypoint in ./src/scripts/index.ts
    entry: `${path.resolve(__dirname, src)}/scripts/index.ts`,
    devtool: 'inline-source-map',
    module: {
        rules: [
            // Use ts-loader for TypeScript
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // Load SCSS
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer using dart-sass over node-sass
                            implementation: require('sass'),
                        }
                    }
                ]
            },
            // Load images
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                loader: 'file-loader',
                options: {
                    name(resourcePath, resourceQuery) {
                        return `/${assets}/[name][sha512:hash:base64:7].[ext]`
                    },
                    esModule: false
                }
            },
            // Load webmanifest
            {
                test: /\.webmanifest$/,
                loader: 'file-loader',
                options: {
                    name(resourcePath, resourceQuery) {
                        return `/[name].[ext]`
                    },
                    esModule: false
                }
            },
        ],
    },
    // Recognize both .ts and .js extensions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    // Where to put the output
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, dist),
        publicPath: path.resolve(__dirname,dist)
    },
    plugins: [
        // Cleanup the dist directory
        new CleanWebpackPlugin(),
        // Plugin to extract css into external files
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        // Plugin to handle generating index.html
        new HtmlWebpackPlugin({
            hash: true,
            filename: `${path.resolve(__dirname, dist)}/index.html`,
            title: title,
            pageHeader: title,
            template: `${path.resolve(__dirname, src)}/index.html`
        })
    ]
};