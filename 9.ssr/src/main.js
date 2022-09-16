import Vue from 'vue'
import App from './App'
import createRouter from './router.js'
import createStore from './store.js'

// 入口文件 需要提供vue的实例
// 如果是服务端渲染 每个人都应该有一个自己的vue实例
// const vm = new Vue({
//     el: '#app',
//     render: h => h(App)
// })

export default () => {
    const router = createRouter()
    const store = createStore()
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return { app, router,store }
}