const Koa = require('koa')
const Router = require('koa-router')
const Static = require('koa-static')
const path = require('path')
const Vue = require('vue')
const vueServerRenderer = require('vue-server-renderer')
const fs = require('fs')


// const vm = new Vue({
//     data() {
//         return { name: 'li' }
//     },
//     template: `<div>{{name}}</div>`
// })
// const template = fs.readFileSync('./template.html', 'utf8')
// 创建一个渲染器
// const render = vueServerRenderer.createRenderer({
//     template // 模板里必须要有占位符
// })


// let ServerBundle = fs.readFileSync('./dist/server.bundle.js', 'utf8')
const ServerBundle = require('./dist/vue-ssr-server-bundle.json')// 映射
const clientManifest = require('./dist/vue-ssr-client-manifest.json')// 映射
// 渲染打包后的结果
const template = fs.readFileSync('./dist/index.ssr.html', 'utf8')
const render = vueServerRenderer.createBundleRenderer(ServerBundle, {
    template,
    clientManifest // 渲染的时候 可以找到客户端的js文件 自动导入到html中
})


const app = new Koa()
const router = new Router()


router.get('/', async ctx => {
    // 通过渲染函数渲染vue实例
    // ctx.body = await render.renderToString(vm)
    // ctx.body = await render.renderToString()// koa里面异步必须封装成promise,否则样式不生效
    ctx.body = await new Promise((resolve, reject) => {
        render.renderToString({ url: '/' }, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
})

app.use(router.routes())
app.use(Static(path.resolve(__dirname, 'dist')))// 注意koa静态服务中间案件的顺序

// 如果匹配不到会执行此逻辑
// 如果服务器没有此路径 会渲染当前的app.vue
app.use(async ctx => {
    try {
        ctx.body = await new Promise((resolve, reject) => {
            // 必须要写成回调函数的形式，否则样式不生效
            render.renderToString({ url: ctx.url }, (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        })
    } catch (e) {
        ctx.body = '404 page not found'
    }
})

app.listen(3000, () => {
    console.log('server run   ' + new Date());
})