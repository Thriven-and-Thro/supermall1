<template>
  <div id="detail_bottom_bar">
    <div>
      <img src="~assets/img/buttombar/客服.png" alt="" />
      <div>客服</div>
    </div>
    <div>
      <img src="~assets/img/buttombar/商铺.png" alt="" />
      <div>店铺</div>
    </div>
    <div>
      <img src="~assets/img/buttombar/收藏.png" alt="" />
      <div>收藏</div>
    </div>
    <div class="detail_bar_push">加入购物车</div>

    <div class="detail_bar_buy">立即购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
};
</script>

<style scoped>
#detail_bottom_bar {
  display: flex;
  bottom: 0;
  height: 49px;
  text-align: center;
  background-color: #fff;
}
#detail_bottom_bar > div:nth-child(-n + 3) {
  flex: 1;
  padding-top: 3px;
}
#detail_bottom_bar img {
  width: 1.8rem;
  height: 1.8rem;
  vertical-align: middle;
}
.detail_bar_push {
  flex: 0 1 25%;
  font-size: 14px;
  line-height: 49px;
  font-weight: 700;
  color: #fff;
  line-height: 49px;
  background-color: #fc9d9a;
}
.detail_bar_buy {
  flex: 0 1 25%;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  line-height: 49px;
  background-color: #fe4365;
}
</style>