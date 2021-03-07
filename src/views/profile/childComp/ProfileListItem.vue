<template>
  <div class="proflie_list_item">
    <div class="check">
      <check-box :isChoice="product.check" @click.native="boxClick" />
    </div>
    <div class="img"><img :src="product.image" alt="" /></div>
    <div class="message">
      <p>{{ product.title }}</p>
      <p>{{ product.desc }}</p>
      <div class="message_bottom">
        <span class="price">￥{{ product.price }}</span>
        <span class="count">×{{ product.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from "components/content/checkBox/CheckBox.vue";

import { mapGetters } from "vuex";

export default {
  name: "ProfileListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CheckBox,
  },
  computed: {
    ...mapGetters(["cartBoxClick"]),
  },
  methods: {
    // 更改vuex里的数据
    boxClick() {
      this.$store.dispatch("judgeItem", this.product);
    },
  },
};
</script>

<style scoped>
.proflie_list_item {
  display: flex;
  width: 100%;
  height: 120px;
  text-align: center;
}
.check {
  flex: 0 1 10%;
  padding-left: 10px;
  align-self: center;
}
.img {
  flex: 0 1 30%;
  padding: 5px 0;
}
.img img {
  width: 90%;
  height: 110px;
  border-radius: 10px;
}
.message {
  flex: 0 1 60%;
  padding: 5px;
  width: 60%;
}
.message > p {
  width: 100%;
  margin-bottom: 5px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.message > p:nth-child(1) {
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
}
.message > p:nth-child(2) {
  line-height: 16px;
  -webkit-line-clamp: 1;
}
.message_bottom {
  display: flex;
  margin-top: 20px;
  text-align: left;
}
.price {
  flex: 1;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-tint);
}
.count {
  flex: 1;
  line-height: 20px;
  text-align: right;
  font-weight: 700;
}
</style>