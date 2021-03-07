<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar {
  /* 使用了better-scroll的局部滚动
  position: fixed;
  top: 0; */
  position: relative;
  width: 100%;
  height: 44px;
  display: flex;
  line-height: 44px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  z-index: 9;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>