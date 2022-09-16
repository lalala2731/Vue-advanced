<template>
  <div>
    Son1 {{ value }}
    <button @click="change">点击修改</button>
    <grand-son-1 :value="value" @broadcast2="f1"></grand-son-1>
  </div>
</template>
<script>
import GrandSon1 from "./GrandSon1.vue";
export default {
  mounted() {
    this.$bus.$on("my$bus", function () {
      console.log("my - $bus");
    });
  },
  name: "Son1",
  props: {
    value: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    change() {
      this.$emit("update:value", 200);
      // this.$emit("input", 200);
    },
    f1(value) {
      console.log("broadcast2:", value);
    },
  },
  components: {
    GrandSon1,
  },
};
</script>