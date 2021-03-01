<template>
  <div class="good_list_item" @click="goodsItemClick">
    <img :src="showImg" alt="" @load="imageLoad" />
    <div class="good_list_item_info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ prices }}</span>
      <span class="cfav">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
    prices() {
      return this.goodsItem.orgPrice || this.goodsItem.discountPrice;
    },
  },
  methods: {
    // 事件总线
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    goodsItemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style scoped>
.good_list_item {
  overflow: hidden;
  text-align: center;
  font-size: 1rem;
  line-height: 1.3rem;
  color: var(--color-text);
}
.good_list_item img {
  width: 100%;
  border-radius: 2.5%;
}
.good_list_item_info {
  padding: 0.28rem 0;
}
.good_list_item p {
  /*1. 先强制一行内显示文本*/
  white-space: nowrap;
  /*2. 超出的部分隐藏*/
  overflow: hidden;
  /*3. 文字用省略号替代超出的部分*/
  text-overflow: ellipsis;
}
.good_list_item .price {
  color: var(--color-high-text);
  font-weight: 700;
}
.good_list_item .cfav {
  position: relative;
  padding-left: 2rem;
}
.good_list_item .cfav::after {
  content: "";
  display: block;
  position: absolute;
  top: 2px;
  left: 1rem;
  width: 1rem;
  height: 1rem;
  background: url("~assets/img/home/收藏.png") no-repeat;
  background-size: 1rem;
}
</style>