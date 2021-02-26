<template>
  <div id="main_tab_bar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#C84275">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/首页.png" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/首页(1).png" alt="" />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/notice" activeColor="#C84275">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/分类.png" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/分类(1).png" alt="" />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#C84275">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/购物车car.png" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/购物车car(1).png" alt="" />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/mine" activeColor="#C84275">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/我的.png" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/我的(1).png" alt="" />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
@import "~assets/css/base.css";

#main_tab_bar img {
  width: 1.8rem;
  height: 1.8rem;
  vertical-align: middle;
}
</style>