import Vue from 'vue'
import App from './App.vue'
// 路由组件
import router from './router'

Vue.config.productionTip = false
// Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
