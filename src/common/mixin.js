// 混入
import { debounce } from "./utils"
import BackTop from "components/content/backTop/BackTop.vue";

// 图片加载防抖的混入
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // 事件总线
    let refresh = debounce(this.$refs.scroll.refresh, 500);
    this.itemImageLoad = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImageLoad)
  }
}
// 返回顶部的混入
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = position.y < -1000;
    }
  }
}