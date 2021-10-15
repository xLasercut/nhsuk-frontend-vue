import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NhsukFrontendVue from '../package/entry'

createApp(App)
  .use(store)
  .use(router)
  .use(NhsukFrontendVue, {router: router})
  .mount('#app')
