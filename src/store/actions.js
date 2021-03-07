// 引入常量
import {
  ADD_COUNTER,
  ADD_TO_CART,
  UPDATE_CLICK
} from "./mountion-types"

// 抽取actions
export default {
  addCart(context, payLoad) {
    return new Promise((resolve, reject) => {
      let oldProduct = null;
      // 判断该商品是否添加过
      for (let item of context.state.cartList) {
        if (item.iid === payLoad.iid) {
          // 添加过则将oldProduct指向该商品
          oldProduct = item;
        }
      }
      if (oldProduct) {
        // 调用加一方法
        context.commit(ADD_COUNTER, oldProduct)
        resolve("商品数量已+1")
      } else {
        // 调用添加方法
        payLoad.count = 1;
        context.commit(ADD_TO_CART, payLoad)
        resolve("已添加至购物车")
      }
      reject("添加失败")
    })
  },
  // 判断选中对象并调用方法
  judgeItem(context, payLoad) {
    let product = null;
    for (let item of context.state.cartList) {
      if (item.iid === payLoad.iid) {
        product = item;
        context.commit(UPDATE_CLICK, product)
      }
    }
  }
}