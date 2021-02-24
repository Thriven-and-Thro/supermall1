<template>
  <div id="home">
    <nav-bar class="nav_home">
      <template v-slot:center>
        <h2>首页</h2>
      </template>
    </nav-bar>
    <!-- 绑定数据，动态获取 -->
    <home-swiper :banners="banners" />
    <home-recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComp/HomeSwiper.vue";
import HomeRecommendView from "./childComp/HomeRecommendView.vue";

//1.引入封装的网络请求
import { getHomeMulitData } from "network/home.js";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
  },
  //3.使用data保存请求的数据
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  //2.在周期函数的create里请求数据

  created() {
    getHomeMulitData().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.nav_home {
  background: var(--color-tint);
}
</style>