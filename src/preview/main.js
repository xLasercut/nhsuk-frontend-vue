import Vue from 'vue'
import App from './App'
import NhsukFrontendVue from '@/entry.js'


Vue.use(NhsukFrontendVue)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
