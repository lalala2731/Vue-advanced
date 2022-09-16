<template>
  <div>
    App
    <Level :t="1">标题</Level>
    <Level :t="2">标题</Level>
    <Level :t="3">标题</Level>
    <Level :t="4">标题</Level>
    <Level :t="5">标题</Level>

    <List :data="data" :render="render"></List>
    <list1 :data="data">
      <template v-slot="{ item }">
        <li>{{ item }}</li>
      </template>
    </list1>
  </div>
</template>
<script>
import Level from "./components/functionRender.js";
import List from "./components/list.vue";
import list1 from "./components/list1.vue";
export default {
  components: {
    Level,
    List,
    list1,
  },
  data() {
    return {
      data: ["aaa", "bbb", "ccc"],
    };
  },
  methods: {
    render(h, data) {
      //data是函数式组件再list组件中每次循环出来的结果
      return <h1>{data}</h1>;
    },
  },
};
</script>