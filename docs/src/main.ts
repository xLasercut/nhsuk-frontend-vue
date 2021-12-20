import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import hljsVuePlugin from './highlight-js'

//import '../../package/dist/nhsuk-frontend-vue.css'
import NhsukFrontendVue from 'nhsuk-frontend-vue/src'
import ArgumentTable from './components/components/ArgumentTable.vue'

const app = createApp(App)

app.component('argument-table', ArgumentTable)

app
  .use(NhsukFrontendVue, {router: true})
  .use(router)
  .use(hljsVuePlugin)
  .mount('#app')
