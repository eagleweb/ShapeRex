const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './client/src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: 'file-loader',
                query:{
                    outputPath: './img/',
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                query: {
                    outputPath: './fonts/',
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: "[name]__[local]___[hash:base64:5]",
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers:['>1%', 'ie >= 11', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },
                ],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'client/public/index.html',
            favicon: 'client/public/favicon.ico'
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:8081'
        },
        open: true,
        hot: true
    }
};