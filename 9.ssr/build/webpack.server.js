
const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const serverRenderPlugin = require('vue-server-renderer/server-plugin')


const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = merge(base, {
    entry: {
        server: resolve('../src/server-entry.js')
    },
    target: 'node', // 要给node使用
    output: {
        libraryTarget: 'commonjs2'// 把最终这个文件的导出结果放到module.exports上?
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.ssr.html',
            template: resolve('../public/index.ssr.html'),
            excludeChunks: ['server']// 排除某个模块 因为html页面引用的不是server.js,是client.js
        }),
        new serverRenderPlugin()
    ]
})