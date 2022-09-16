<template>
  <div>
    Son2
    {{ $attrs }}
    ---{{ this.aaa }}
    <GrandSon2 v-bind="$attrs" v-on="$listeners"></GrandSon2>
    <!-- <GrandSon2 v-bind="{ name: 1, age: 2 }" v-on="$listeners"></GrandSon2> -->
  </div>
</template>
<script>
import GrandSon2 from "./GrandSon2.vue";
export default {
  inject: ["aaa"],
  inheritAttrs: false,
  components: {
    GrandSon2,
  },
};
</script>