const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
require('dotenv').config();

module.exports = {
    mode: 'development',

    entry: {
        main: path.resolve('./src/app.js')
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    path.resolve('./myLoader.js')
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/inline'
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
                //toLocaleString : 날짜의 문자열 표현을 지역의 언어에 맞는 형식으로 반환합니다.
            banner: `
                Commit version : ${childProcess.execSync('git rev-parse --short HEAD')}
                Committer : ${childProcess.execSync('git config user.name')}
                Commit Date : ${new Date().toLocaleString()}
            `
        }),
        new webpack.DefinePlugin({            
            pw: 123456
        }),
        new webpack.DefinePlugin({
            dev: JSON.stringify(process.env.DEV_API),
            pro: JSON.stringify(process.env.PRO_API)
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html', // 목표 html 파일의 위치입니다.
        }),
        new CleanWebpackPlugin()
    ]
}