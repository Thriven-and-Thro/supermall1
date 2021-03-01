<template>
  <swiper class="detail_swiper" ref="swiper">
    <swiper-item v-for="item in topImages" :key="item.index">
      <img :src="item" alt="" @load="imagesLoad" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      // 节流阀
      isLoad: true,
    };
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // 图片加载完毕开启轮播图
    imagesLoad() {
      if (this.isLoad) {
        this.$refs.swiper.star();
        this.isLoad = false;
      }
    },
  },
};
</script>

<style scoped>
.detail_swiper {
  height: 50vh;
  overflow: hidden;
}
.detail_swiper img {
  width: 100%;
}
</style>