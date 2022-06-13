const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Below is CommonJS Syntax and not ES6. Tools like Webpack always use CommonJS syntax for their config files
module.exports = {
    mode: "production",
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,"css-loader"],
            },
            { test: /\.js$/, exclude: '/node_modules/', use: 'babel-loader' }
        ],
    },
    plugins: [new MiniCssExtractPlugin(),new HtmlWebpackPlugin({ template: './src/index.html' })],
    devtool:'source-map'
}