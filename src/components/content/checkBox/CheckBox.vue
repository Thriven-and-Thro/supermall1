<template>
  <div id="check_box">
    <div class="box" :class="{ active: isChoice }">
      <img
        src="~assets/img/common/勾.png"
        alt=""
        :class="{ active: isChoice }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    isChoice: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.box {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #666;
  overflow: hidden;
}
.box img {
  width: 100%;
}
.active {
  background-color: var(--color-tint);
  border: none;
}
</style>