<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="under">
      <div class="shop-name-info">
        <img :src="shop.logo" alt="" class="shop-img" />
        <span>{{ shop.name }}</span>
      </div>
      <div class="enter-shop-wrap">
        <div class="enter-shop">进店逛逛</div>
      </div>
    </div>
    <div class="shop-other-info">
      <div class="shop-other-sell">
        <div>
          <span>总销量:&ensp;</span>
          <span class="f16">{{ shop.sells }}</span>
        </div>
        <div>
          <span>全部宝贝:&ensp;</span>
          <span class="f16">{{ shop.goodsCount }}</span>
        </div>
      </div>
      <div class="shop-other-right">
        <div v-for="item in shop.score" :key="item.index">
          {{ item.name }}
          <span class="score" :class="{ active: item.isBetter }">{{
            item.score
          }}</span>
          <span class="score_bg" :class="{ active_bg: item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    console.log(this.shop);
  },
};
</script>

<style scoped>
.detail-shop-info {
  padding: 0 7px;
  border-bottom: 10px solid #ddd;
}
.under {
  display: flex;
  border-bottom: 1px solid #ccc;
}
.shop-name-info {
  flex: 0 1 80%;
  padding: 7px 0;
  font-size: 18px;
}
.shop-img {
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid #000;
}
.enter-shop-wrap {
  flex: 1;
  align-self: center;
}
.enter-shop {
  width: 90px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
  border: 1px solid #333;
  border-radius: 30px;
}
.shop-other-info {
  display: flex;
}
.shop-other-sell {
  flex: 1;
  margin: 7px 0;
  font-size: 14px;
  line-height: 30px;
}
.f16 {
  font-size: 16px;
}
.shop-other-right {
  flex: 1;
  margin: 7px 0 7px 20%;
  line-height: 20px;
  color: #333;
}
.shop-other-right > div {
  display: flex;
}
.score {
  flex: 1;
  margin-left: 10px;
  color: #5cb800;
}
.active {
  color: #d85f61;
}
.score_bg {
  flex: 0 1 10px;
  margin-right: 10%;
  color: #fff;
  background-color: #5cb800;
}
.active_bg {
  color: #fff;
  background-color: #d85f61;
}
</style>