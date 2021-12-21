import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import hljsVuePlugin from './highlight-js'

import '../../package/dist/nhsuk-frontend-vue.css'
import NhsukFrontendVue from 'nhsuk-frontend-vue'
import ArgumentTable from './components/components/ArgumentTable.vue'
import CodeBlock from './components/components/CodeBlock.vue'

const app = createApp(App)

app.component('argument-table', ArgumentTable)
app.component('code-block', CodeBlock)

app
  .use(NhsukFrontendVue, {router})
  .use(router)
  .use(hljsVuePlugin)
  .mount('#app')
