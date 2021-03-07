<template>
  <div class="comment-info-wrap" v-if="Object.keys(commentInfo1).length !== 0">
    <div class="comment-title flex">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div v-for="(item, index) in commentInfo1" :key="index">
      <div class="comment-user-info">
        <span><img :src="item.user.avatar" alt="" class="avatar" /></span>
        <span>{{ item.user.uname }}</span>
      </div>
      <div class="comment-text">{{ item.content }}</div>
      <div class="comment-goods-info">
        <span class="comment-time">{{ item.created }}</span>
        <span>{{ item.style }}</span>
      </div>
      <div class="flex">
        <div
          class="comment-info-images"
          v-for="(item, indey) in item.images"
          :key="indey"
        >
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      commentInfo1: {},
    };
  },
  // watch: {
  //   commentInfo() {
  //     this.$forceUpdate();
  //   },
  // },
  watch: {
    commentInfo() {
      this.commentInfo1 = this.commentInfo;
      console.log(this.commentInfo1);
      console.log(Object.keys(this.commentInfo1));
    },
  },
  mounted() {
    console.log(Object.keys(this.commentInfo1));
  },
  beforeUpdate() {
    console.log(this.commentInfo1);
  },
};
</script>

<style scoped>
</style>