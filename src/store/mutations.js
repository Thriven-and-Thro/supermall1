// 引入常量
import {
  ADD_COUNTER,
  ADD_TO_CART,
  UPDATE_CLICK
} from "./mountion-types"

// 抽取mutations
export default {
  // 加一
  [ADD_COUNTER](state, oldProduct) {
    oldProduct.count++
  },
  // 添加
  [ADD_TO_CART](state, payLoad) {
    payLoad.check = false
    state.cartList.push(payLoad)
  },
  // 更新是否选中
  [UPDATE_CLICK](state, payLoad) {
    payLoad.check = !payLoad.check
  }
}