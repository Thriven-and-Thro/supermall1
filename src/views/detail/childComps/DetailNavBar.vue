<template>
  <nav-bar>
    <template v-slot:left>
      <div class="back" @click="goBack">
        <img src="~assets/img/common/返回.png" alt="" />
      </div>
    </template>
    <template v-slot:center>
      <div class="titles">
        <div
          v-for="(item, index) in titles"
          :key="item.index"
          :class="{ active: currentIndex === index }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    // 监听导航点击
    itemClick(index) {
      this.currentIndex = index;
      // 发送事件给父组件
      this.$emit("itemClick", index);
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.titles {
  display: flex;
  color: var(--color-text);
}
.titles > div {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back img {
  width: 40%;
}
</style>