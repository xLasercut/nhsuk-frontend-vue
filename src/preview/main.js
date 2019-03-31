import Vue from 'vue'
import App from './App'
import router from './router.js'
import NhsukFrontendVue from '@/entry.js'
import VueHighlightJS from 'vue-highlightjs'
import CodeBlock from '@/preview/components/CodeBlock.vue'


Vue.use(NhsukFrontendVue)
Vue.use(VueHighlightJS)
Vue.component("code-block", CodeBlock)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
