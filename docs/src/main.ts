import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import hljsVuePlugin from './highlight-js';

import NhsukFrontendVue from '../../package/src';
import ArgumentTable from './components/components/ArgumentTable.vue';
import CodeBlock from './components/components/CodeBlock.vue';

const app = createApp(App);

app.component('argument-table', ArgumentTable);
app.component('code-block', CodeBlock);

app.use(NhsukFrontendVue, { router }).use(router).use(hljsVuePlugin).mount('#app');
