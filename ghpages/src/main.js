import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import NhsukFrontendVue from '../../src/entry.js'
import VueHighlightJS from 'vue-highlightjs'
import CodeBlock from './components/CodeBlock.vue'


Vue.use(NhsukFrontendVue)
Vue.use(VueHighlightJS)
Vue.component("code-block", CodeBlock)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
