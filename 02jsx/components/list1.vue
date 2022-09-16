<template>
  <div>
    <slot v-for="item in data" :item="item"></slot>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: [],
      default: () => [],
    },
  },
};
</script>