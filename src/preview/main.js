import Vue from 'vue'
import App from './App'
import router from './router.js'
import NhsukFrontendVue from '@/entry.js'
import VueHighlightJS from 'vue-highlightjs'


Vue.use(NhsukFrontendVue)
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
