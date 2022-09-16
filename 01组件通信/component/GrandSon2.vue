<template>
  <div>GrandSon2 {{ $attrs }} ---{{ this.aaa }}</div>
</template>
<script>
export default {
  inject: ["aaa"],
  inheritAttrs: false,
  mounted() {
    this.$listeners.son();
  },
};
</script>