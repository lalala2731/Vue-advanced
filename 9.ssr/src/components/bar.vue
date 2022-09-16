<template>
  <div>
    bar.vue
    <button @click="barClick">点击</button>
    {{ this.$store.state.name }}
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("changeName");
  },
  asyncData(store) {
    // 此方法只在服务端执行，并且只在
    // 页面组件中执行
    console.log("asyncData");
    return store.dispatch("changeName");
  },
  methods: {
    barClick() {
      alert("bar~");
    },
  },
};
</script>
<style scoped>
div {
  color: skyblue;
}
</style>