<template>
  <div class="back_top">
    <img src="~assets/img/common/回到顶部.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.back_top {
  position: fixed;
  left: 80%;
  bottom: 10%;
  width: 3rem;
  height: 3rem;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 50%;
  border: 0.04rem solid var(--color-tint);
  box-shadow: 0.04rem 0.04rem rgba(100, 100, 100, 0.1);
  z-index: 12;
}
.back_top img {
  width: 80%;
  padding-top: 0.2rem;
}
</style>