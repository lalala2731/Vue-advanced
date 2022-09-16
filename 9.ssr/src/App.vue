<template>
<!-- 客户端激活 -->
  <div id="app">

    <router-link to="/">foo</router-link>
    <router-link to="/bar">bar</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import bar from "./components/bar.vue";
import foo from "./components/foo.vue";
export default {
  components: {
    bar,
    foo,
  },
};
</script>