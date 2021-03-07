<template>
  <div id="profile_bottom_bar">
    <div class="bottom_check">
      <check-box
        class="bottom_check_box"
        @click.native="bottomBoxClick"
        :isChoice="isSelectAll"
      />
    </div>
    <div class="bottom_check_text">全选</div>
    <div class="profile_count">合计：{{ totalPrice }}</div>
    <div class="profile_commit">
      <div class="profile_commit_click" @click="commitClick">
        去结算({{ totalCount }})
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from "components/content/checkBox/CheckBox.vue";

import { mapGetters } from "vuex";

export default {
  name: "ProfileBottomBar",
  components: {
    CheckBox,
  },
  computed: {
    ...mapGetters(["cartList"]),
    // 总价
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.check;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    // 总数
    totalCount() {
      return this.cartList
        .filter((item) => {
          return item.check;
        })
        .reduce((preValue, item) => {
          return preValue + item.count;
        }, 0);
    },
    isSelectAll() {
      // 全选同步
      return this.cartList.length === 0
        ? false
        : !this.cartList.find((item) => !item.check);
    },
  },
  methods: {
    // 点击全选按钮
    bottomBoxClick() {
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.check = false));
      } else {
        this.cartList.forEach((item) => (item.check = true));
      }
    },
    commitClick() {
      if (!this.isSelectAll) {
        this.$toast.show("请选择商品");
      }
    },
  },
};
</script>

<style scoped>
#profile_bottom_bar {
  display: flex;
  align-items: center;
  height: 44px;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.bottom_check {
  padding: 10px;
  flex: 0 1 12.5%;
}
.bottom_check_text {
  flex: 0 1 12.5%;
}
.profile_count {
  flex: 0 1 40%;
  font-size: 16px;
}
.profile_commit {
  flex: 0 1 35%;
  padding: 0 5px;
}
.profile_commit_click {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  border-radius: 30px;
  background-color: var(--color-tint);
}
</style>