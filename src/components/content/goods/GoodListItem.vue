<template>
  <div class="good_list_item">
    <a :href="goodsItem.clientUrl">
      <img :src="goodsItem.show.img" alt="" />
      <div class="good_list_item_info">
        <p>{{ goodsItem.title }}</p>
        <span class="price">{{ goodsItem.orgPrice }}</span>
        <span class="cfav">{{ goodsItem.cfav }}</span>
      </div>
    </a>
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
};
</script>

<style scoped>
.good_list_item {
  overflow: hidden;
  text-align: center;
}
.good_list_item a {
  font-size: 1rem;
  color: var(--color-text);
}
.good_list_item img {
  width: 100%;
  border-radius: 2.5%;
}
.good_list_item_info {
  padding-bottom: 0.28rem;
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
  top: 0;
  left: 1rem;
  width: 1rem;
  height: 1rem;
  background: url("~assets/img/home/收藏.png") no-repeat;
  background-size: 1rem;
}
</style>