<template>
  <div><parent></parent></div>
</template>
<script>
import Parent from "./component/Parent.vue";
export default {
  components: {
    Parent,
  },
  mounted() {
    console.log("128");
    this.$broadcast("broadcast2", 222);
  },
};
</script>