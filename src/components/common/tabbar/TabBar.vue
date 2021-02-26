<template>
  <div class="tabar_box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>


<style scoped>
.tabar_box {
  display: flex;
  position: fixed;
  width: 100%;
  height: 49px;
  bottom: 0;
  left: 0;
  background-color: #fafafa;
  box-shadow: 0 0.04rem 0.04rem rgba(100, 100, 100, 0.1);
  z-index: 999;
}
</style>
