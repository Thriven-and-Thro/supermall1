<template>
  <div v-if="Object.keys(goodsParam).length !== 0" class="params-wrap">
    <div v-if="goodsParam.image !== null">
      <img :src="goodsParam.image" alt="" />
    </div>
    <table class="goodsParam_infos">
      <tr v-for="infos in goodsParam.infos" :key="infos.index">
        <td>{{ infos.key }}</td>
        <td>{{ infos.value }}</td>
      </tr>
    </table>
    <table class="goodsParam_sizes">
      <tr v-for="sizes in goodsParam.sizes[0]" :key="sizes.index">
        <td v-for="(item, index) of sizes" :key="item.index">
          {{ sizes[index] }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    goodsParam: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.params-wrap {
  padding: 7px;
  line-height: 20px;
  text-align: center;
  border-bottom: 10px solid #ddd;
}
.params-wrap table {
  width: 100%;
  margin: 5px 0;
  border: 1px solid #666;
}
.params-wrap td {
  height: 20px;
  border-bottom: 1px dotted #aaa;
}
.params-wrap tr:nth-last-child(1) td {
  border-bottom: none;
}
.params-wrap tr td:nth-child(1) {
  border-right: 1px dotted #aaa;
}
.goodsParam_infos > tr > td:nth-child(1) {
  width: 20%;
}
.goodsParam_sizes > tr > td:nth-child(1) {
  width: 25%;
}
.goodsParam_sizes tr td {
  border-right: 1px dotted #aaa;
}
.goodsParam_sizes tr td:nth-last-child(1) {
  border-right: none;
}
</style>