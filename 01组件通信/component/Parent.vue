<template>
  <div>
    Parent {{ money }}
    <!-- <Son1 :value="money" @update:value="(value) => (this.money = value)"></Son1> -->
    <Son1 :value.sync="money" ref="son1"></Son1>
    <!-- <son-1 :value="money" @input="(value) => (this.money = value)"></son-1> -->
    <!-- <son-1 v-model="money"></son-1> -->

    <Son2 name="Jack" age="18" @son="son"></Son2>
  </div>
</template>
<script>
import Son1 from "./Son1.vue";
import Son2 from "./Son2.vue";
export default {
  mounted() {
    this.$refs.son1.f1("ref:son1");
  },
  provide() {
    return {
      aaa: this.aaa,
    };
  },
  components: {
    Son1,
    Son2,
  },
  methods: {
    son() {
      console.log("son");
    },
    // fn1(value) {
    //   this.money = value;
    // },
  },
  data() {
    return {
      money: 100,
      aaa: "aaa",
    };
  },
};
</script>