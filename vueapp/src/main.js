import Vue from 'vue'
import App from './App.vue'
import test from './plugin/TestPlug'
Vue.config.productionTip = false

//use plugin
//Vue.use(test)


new Vue({
  render: h => h(App),
}).$mount('#app')
