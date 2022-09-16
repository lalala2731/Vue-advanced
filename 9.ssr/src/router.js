import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from './components/foo.vue'
import bar from './components/bar.vue'
Vue.use(VueRouter)


export default () => {
    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Foo
            },
            {
                path: '/bar',
                component: bar
                // component: () => import('./components/bar.vue')
            }
        ]
    })
    return router
}