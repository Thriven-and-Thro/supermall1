<template>
  <div class="comment-info-wrap" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-title flex">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div v-for="item in commentInfo" :key="item.index">
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
          v-for="item in item.images"
          :key="item.index"
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
  watch: {
    commentInfo() {
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
</style>