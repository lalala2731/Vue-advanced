// 服务端
import createApp from './main'

// 是渲染页面的

// 服务端需要调用这个文件产生一个vue的实例
export default (context) => {
    // 服务端会执行此方法
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()
        // 返回的实例应该跳转到 / 或者 /bar
        router.push(context.url)// 渲染当前页面
        // 涉及到异步组件的问题
        router.onReady(() => {
            // 获取当前跳转到的匹配的组件(多个)
            let matchs = router.getMatchedComponents()
            if (matchs.length === 0) {
                reject({ code: 404 })
                // 失败，renderToString方法失败
                // 走reject，Promise失败
                // 走catch
            }

            // matchs匹配到所有的组件，整个都在服务端执行的
            // 有可能匹配到多个，都有store返回的promise方法
            // 需要使用promise.all包裹，都执行完后再让app成功
            Promise.all(matchs.map(component => {
                if (component.asyncData) {
                    // asyncData是在服务端调用的
                    return component.asyncData(store)
                }
            })).then(() => {
                // 以上all中的方法 会改变store中的state
                // 把vuex的状态挂载到上下文中，会将状态挂到window上
                context.state = store.state
                resolve(app)
            })


        }, reject)
    })

    //获取数据的操作 在服务端获取好完整的数据


}

// 服务端配好后，需要导出给node使用