<template>
  <swiper ref="swiper">
    <swiper-item v-for="item in banners" v-bind:key="item.index">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // 用作节流阀
      isLoad: false,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        // 图片加载完毕开启轮播图
        this.$refs.swiper.star();
        // 图片加载完毕传递事件给父组件
        this.$emit("imgLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style>
</style>