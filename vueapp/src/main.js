import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//加载路由配置
import routes from "./roout/config.js"

//加载并使用router
import VueRouter  from 'vue-router'
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
}).$mount('#app')
