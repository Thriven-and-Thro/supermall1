<template>
  <div id="detail">
    <detail-nav-bar class="detail_nav_bar" @itemClick="themeTop" ref="nav" />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll">
      <detail-swiper :topImages="topImages" :goods="goods" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info :goods-param="goodsParam" ref="params" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <!-- 组件复用 -->
      <good-list :goods="recommend" ref="recommend" />
    </scroll>
    <detail-bottom-bar class="detail_bottom_bar" />
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import GoodList from "components/content/goods/GoodList.vue";
import { itemListenerMixin, backTopMixin } from "common/mixin.js";
import { debounce } from "common/utils.js";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodList,
    Scroll,
  },
  mixins: [itemListenerMixin, backTopMixin],
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 取出评论
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });
    // 将获取组件的位置的方法防抖化
    this.getThemeTopY = debounce(() => {
      // 位置存放在数组
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // 末尾加一个无限大的数字方便位置判断
      this.themeTopYs.push(Number.MAX_VALUE);
    }, 200);
  },
  mounted() {},
  methods: {
    // 监听图片加载
    imgLoad() {
      this.$refs.scroll.refresh();
      // 调用防抖化后的获取位置方法
      this.getThemeTopY();
    },
    // 监听导航点击
    themeTop(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    scroll(position) {
      let length = this.themeTopYs.length;
      // 循环全选
      for (let i = 0; i < length - 1; i++) {
        // 优化判断
        if (
          this.currentIndex !== i &&
          -position.y >= this.themeTopYs[i] &&
          -position.y < this.themeTopYs[i + 1]
        ) {
          // 修改当前索引并传递给子组件
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.listenShowBackTop(position);
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 10;
  overflow: hidden;
  background-color: #fff;
}
.detail_nav_bar {
  position: relative;
  z-index: 11;
  background-color: #fff;
}
.content {
  position: relative;
  height: calc(100% - 44px - 49px);
  background-color: var(--color-background);
  z-index: 10;
}
.detail_bottom_bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 11;
}
</style>