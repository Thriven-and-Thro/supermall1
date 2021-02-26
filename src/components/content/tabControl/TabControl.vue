<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item.index"
      :class="{ active: index === currentIndex }"
      @click="item_click(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    item_click(index) {
      this.currentIndex = index;
      // 子传父传递事件和参数
      this.$emit("item_click", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  background-color: var(--color-background);
  z-index: 9;
}
.tab-control > div {
  flex: 1;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-text);
}
.active span {
  padding-bottom: 0.08rem;
  color: var(--color-high-text);
  border-bottom: 0.1rem solid var(--color-high-text);
}
</style>