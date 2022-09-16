<template>
  <Table border :columns="columns" :data="data"></Table>
</template>
<script>
export default {
  methods: {
    render(h, { row, column, index }) {
      console.log(row, column, index);
      return <h1>{row[column.key]}</h1>;
    },
  },
  data() {
    return {
      columns: [
        {
          title: "姓名",
          key: "name",
          render: this.render,
        },
        {
          title: "年龄",
          key: "age",
        },
        {
          title: "地址",
          key: "address",
        },
      ],
      data: [
        {
          name: "王小明",
          age: 18,
          address: "北京市朝阳区芍药居",
        },
        {
          name: "张小刚",
          age: 25,
          address: "北京市海淀区西二旗",
        },
        {
          name: "李小红",
          age: 30,
          address: "上海市浦东新区世纪大道",
        },
        {
          name: "周小伟",
          age: 26,
          address: "深圳市南山区深南大道",
        },
      ],
    };
  },
};
</script>
