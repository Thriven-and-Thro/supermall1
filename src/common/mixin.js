// 混入
import { debounce } from "./utils"
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