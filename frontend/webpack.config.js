const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

// Read the .env file
const env = dotenv.config().parsed;

// Reduce the env variables to a nice object that webpack can use
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});
console.log(envKeys);
module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Inject styles into the HTML
                    'css-loader',   // Translates CSS into CommonJS
                    'sass-loader'   // Compiles Sass to CSS
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new webpack.DefinePlugin(envKeys),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        compress: true,
        port: 3000,
    },
    mode: 'development',
};
