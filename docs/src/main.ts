import { createApp } from 'vue'
import App from './App.vue'
import NhsukFrontendVue from 'nhsuk-frontend-vue/src'
import '../../node_modules/nhsuk-frontend/dist/nhsuk.css'
import '../../node_modules/nhsuk-frontend/packages/polyfills'

createApp(App).use(NhsukFrontendVue, {router: false}).mount('#app')
