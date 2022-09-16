<template>
  <div>
    <template v-for="(item, index) in data">
      <li v-if="!render" :key="index">{{ item }}</li>
      <list-item
        v-else
        :key="`a${index}`"
        :render="render"
        :item="item"
      ></list-item>
    </template>
  </div>
</template>
<script>
import listItem from "./listItem.js";
export default {
  components: {
    listItem,
  },
  props: {
    data: {
      type: [],
      default: () => [],
    },
    render: {
      type: Function,
    },
  },
};
</script>