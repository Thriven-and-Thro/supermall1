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
  bottom: 0;
  left: 0;
  background-color: #fafafa;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
</style>
