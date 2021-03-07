import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 插件
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()

// 注册自定义插件
Vue.use(toast)

// 解决移动端300ms延迟
FastClick.attach(document.body)
Vue.use(VueLazyLoad)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
