<template>
  <div id="home">
    <nav-bar class="nav_home">
      <template v-slot:center>
        <h2>首页</h2>
      </template>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 绑定数据，动态获取 -->
      <home-swiper :banners="banners" />
      <home-recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        class="tar_control"
        :titles="['流行', '新款', '精选']"
        @item_click="item_click"
      />
      <!-- 参数太长可封装为计算属性 -->
      <good-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 引入子组件
import HomeSwiper from "./childComp/HomeSwiper.vue";
import HomeRecommendView from "./childComp/HomeRecommendView.vue";
import FeatureView from "./childComp/FeatureView.vue";

// 引入通用组件
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodList from "components/content/goods/GoodList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";

//1.引入封装的网络请求
import { getHomeMulitData, getHomeGoods } from "network/home.js";

export default {
  name: "home",
  components: {
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },

  //3.使用data保存请求的数据
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
    };
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },

  //2.在周期函数的create里请求数据
  created() {
    this.getHomeMulitData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  methods: {
    // 事件

    // 通过数字转换实现监听
    item_click(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isShowBackTop = position.y < -1000;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },

    // 数据请求
    // 将周期函数里请求的代码抽取
    getHomeMulitData() {
      getHomeMulitData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 刷新下拉加载
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  padding-top: 44px;
  height: 100vh;
}
.nav_home {
  background: var(--color-tint);
}
.tar_control {
  position: sticky;
  top: 44px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>