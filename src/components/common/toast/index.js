import Toast from './Toast.vue'

const obj = {}

obj.install = function (Vue) {
  // 创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  // 创建实例
  const toast = new toastContrustor()
  // 挂载
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  // 添加原型
  Vue.prototype.$toast = toast;
}

export default obj