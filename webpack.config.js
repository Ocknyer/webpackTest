const path = require('path');
const webpack = require('webpack');

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
            banner: '마지막 빌드 시간은 ' + new Date().toLocaleString() + ' 입니다.'
        })
    ]
}