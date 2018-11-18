const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader']
            }
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