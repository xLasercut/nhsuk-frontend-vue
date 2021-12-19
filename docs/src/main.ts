import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NhsukFrontendVue from 'nhsuk-frontend-vue/src'
import '../../node_modules/nhsuk-frontend/dist/nhsuk.css'
import '../../node_modules/nhsuk-frontend/packages/polyfills'

createApp(App).use(NhsukFrontendVue, {router: true}).use(router).mount('#app')
