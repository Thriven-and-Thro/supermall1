<template>
  <div class="tabar_text" @click="itemClick">
    <div v-if="!isActive" class="img_geshi">
      <slot name="item-icon"></slot>
    </div>
    <div v-else class="img_geshi">
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tabar_text {
  flex: 1;
  text-align: center;
  font-size: 0.8rem;
}
</style>