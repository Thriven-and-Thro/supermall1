<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info_price">
      <span class="n_price">{{ goods.newPrice }}</span>
      <span class="o_price"> {{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info_title">{{ goods.title }}</div>
    <div class="info_other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info_service">
      <span
        class="info_service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  padding: 7px 7px;
  line-height: 1.3rem;
  color: var(--color-text);
  border-bottom: 10px solid #ddd;
}
.info_title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}
.info_price {
  padding: 5px 0;
}
.n_price {
  font-size: 24px;
  color: var(--color-high-text);
  font-weight: 700;
}
.o_price {
  font-size: 10px;
  color: #888;
  text-decoration: line-through;
}
.discount {
  display: inline-block;
  margin-left: 12px;
  padding: 0 5px;
  font-size: 14px;
  color: #fff;
  background-color: #ff4202;
  border-radius: 24px;
}
.info_other {
  padding: 8px 0;
  display: flex;
  font-size: 16px;
  color: #888;
  border-bottom: 1px solid #ccc;
}
.info_other span {
  flex: 1;
  text-align: center;
}
.info_other > span:nth-child(1) {
  text-align: left;
}
.info_other > span:nth-last-child(-n + 1) {
  text-align: right;
}
.info_service {
  display: flex;
  margin: 10px 0;
  font-size: 10px;
  line-height: 12px;
  vertical-align: middle;
}
.info_service > span {
  flex: 1;
}
.info_service img {
  width: 10px;
}
</style>