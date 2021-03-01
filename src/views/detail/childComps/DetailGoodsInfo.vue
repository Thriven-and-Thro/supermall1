<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail_goods_info">
    <div class="info-text-wrap">
      <div class="info-text-desc">{{ detailInfo.desc }}</div>
    </div>
    <div
      class="img-list-wrap"
      v-for="item in detailInfo.detailImage"
      :key="item.index"
    >
      <div class="desc">{{ item.key }}</div>
      <div v-for="(item, index) in item.list" :key="index">
        <img :src="item" alt="" class="img" @load="imgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
      imglength: 0,
    };
  },
  methods: {
    // 防止多次发送事件：防抖
    imgLoad() {
      if (++this.counter === this.imglength) {
        this.$emit("imgLoad");
      }
    },
  },
  // watch：监听数据的变化
  watch: {
    detailInfo() {
      // 取得总图片个数。在周期函数获取会取到默认值，出错
      this.imglength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>

<style scoped>
.detail_goods_info {
  padding: 14px 7px;
}
.info-text-desc {
  padding: 7px;
  line-height: 16px;
  border: 1px dotted #333;
}
.desc {
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #333;
  background-color: rgba(200, 66, 117, 0.6);
}
.img {
  width: 100%;
}
</style>