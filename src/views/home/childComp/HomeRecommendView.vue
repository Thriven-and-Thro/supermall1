<template>
  <div class="recommend">
    <!-- 遍历从父组件获取的数据 -->
    <div v-for="item in recommends" :key="item.index">
      <!-- 通过绑定动态使用 -->
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  // 从父组件获取数据
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  background-color: var(--color-background);
  border-bottom: 10px solid rgba(100, 100, 100, 0.1);
}

.recommend > div {
  flex: 1;
  text-align: center;
}
.recommend img {
  width: 90%;
}
.recommend a {
  color: var(--color-text);
}
</style>