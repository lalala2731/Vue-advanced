export default {
    props: {
        t: {
            type: Number,
            default: 1
        }
    },
    render(h) { //h：creatElement 创建元素
        let tag = 'h' + this.t
        // jsx以{开头
        return <tag>{this.$slots.default}</tag>
    }
}