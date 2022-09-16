
const path = require('path')
const vueLoader = require('vue-loader/lib/plugin')// vue-loader需要配合此插件使用
// const htmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
    
    output: {
        filename: '[name].bundle.js',
        path: resolve('../dist')
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }, {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new vueLoader(),
        
    ],
    mode:'development'

}