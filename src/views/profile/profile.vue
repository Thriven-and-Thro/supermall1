<template>
  <div id="profile">
    <nav-bar class="nav_bar">
      <template v-slot:center>
        <div>购物车({{ cartLength }})</div>
      </template>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <profile-list class="profile_list"> </profile-list>
    </scroll>
    <profile-bottom-bar class="profile_bottom_bar" />
  </div>
</template>

<script>
import ProfileList from "./childComp/ProfileList.vue";
import ProfileBottomBar from "./childComp/ProfileBottomBar.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";

// 导入辅助函数mapGetters
import { mapGetters } from "vuex";

export default {
  name: "profile",
  components: {
    ProfileList,
    ProfileBottomBar,
    NavBar,
    Scroll,
  },
  // 使用辅助函数mapGetters的数组方法
  computed: {
    ...mapGetters(["cartLength"]),
  },
  // 如果先打开购物车再添加商品，
  // scroll会使用未添加商品之前的高度导致无法滚动，
  // 此时需要刷新一下
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.nav_bar {
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  color: var(--color-high-text);
  background-color: #fff;
  border-bottom: 2px solid var(--color-tint);
}
#profile {
  height: 100vh;
  overflow: hidden;
}
.content {
  height: calc(100% - 44px - 49px - 44px);
}
.profile_list {
  width: 100%;
}
.profile_bottom_bar {
  position: relative;
  width: 100%;
}
</style>