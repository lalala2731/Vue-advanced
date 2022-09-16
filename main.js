import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() // 是一个Vue实例，就可以使用$on,,$emit
// 向上传递
Vue.prototype.$dispatch = function (eventName, value) {
    let parent = this.$parent
    while (parent) {
        parent.$emit(eventName, value)
        parent = parent.$parent
    }
}
// 向下传递
Vue.prototype.$broadcast = function (eventName, value) {
    const broadcast = (children) => {
        children.forEach(child => {
            child.$emit(eventName, value)
            if (child.$children) {
                broadcast(child.$children)
            }
        })
    }
    broadcast(this.$children)
}
new Vue({
    el: '#app',
    render: h => h(App)
})