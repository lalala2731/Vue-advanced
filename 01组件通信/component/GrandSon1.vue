<template>
  <div>
    GrandSon1:{{ value }}
    <button @click="grandsonChange">点击修改</button>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$bus.$emit("my$bus", "");
    });
  },
  props: {
    value: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    grandsonChange() {
      // console.log(this.$parent.$options.name);

      // this.$parent.$emit("input", 2000);

      // this.$parent.$emit("update:value", 2000);

      this.$dispatch("update:value", 3000);
    },
  },
};
</script>