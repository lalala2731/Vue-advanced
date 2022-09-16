
const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const clientRenderPlugin = require('vue-server-renderer/client-plugin')// 客户端和服务端映射产生关联


const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = merge(base, {
    entry: {
        client: resolve('../src/client-entry.js')
    },
    output: {
        publicPath:''
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('../public/index.html')
        }),
        new clientRenderPlugin()
    ]
})