import Vue from 'vue'
import App from './App.vue'
// 路由组件
import router from './router'
import { knButton } from '../packages/index'

Vue.config.productionTip = false
Vue.component('kn-button', knButton)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
