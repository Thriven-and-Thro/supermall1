<template>
  <div class="good_list">
    <div v-for="item in goods" :key="item.index">
      <good-list-item :goodsItem="item" />
    </div>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem.vue";

export default {
  name: "GoodList",
  components: {
    GoodListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
    console.log(this.goods);
  },
};
</script>

<style scoped>
.good_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.good_list > div {
  flex: 0 1 48%;
  min-width: 0;
}
</style>