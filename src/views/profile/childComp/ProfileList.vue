<template>
  <div id="profile_list">
    <div v-for="item in list" :key="item.index">
      <profile-list-item :product="item" />
    </div>
  </div>
</template>

<script>
import ProfileListItem from "./ProfileListItem.vue";

import { mapGetters } from "vuex";

export default {
  name: "ProfileList",
  components: {
    ProfileListItem,
  },
  // 使用辅助函数mapGetters的对象方法
  computed: {
    ...mapGetters({
      list: "cartList",
    }),
  },
};
</script>

<style scoped>
</style>