# nhsuk-frontend-vue

This is an **unofficial** port of [nhsuk-frontend library](https://github.com/nhsuk/nhsuk-frontend/) in to a vue.js component library.

For previews and docs: [Preview Page](https://xlasercut.github.io/nhsuk-frontend-vue/)

NPM page: [nhsuk-frontend-vue](https://www.npmjs.com/package/nhsuk-frontend-vue)

Changelog: [Changelog](https://github.com/xLasercut/nhsuk-frontend-vue/blob/master/CHANGELOG.md)


## Install
```
npm install nhsuk-frontend-vue
```
or
```
yarn add nhsuk-frontend-vue
```

## Use

```jsx
import { createApp } from 'vue'
import App from './App.vue'
import NhsukFrontendVue from 'nhsuk-frontend-vue'

const app = createApp(App)
app.use(NhsukFrontendVue)
```
If require router support, import router and add as option
```jsx
import { createApp } from 'vue'
import App from './App.vue'
import NhsukFrontendVue from 'nhsuk-frontend-vue'
import router from './router'

const app = createApp(App)
app.use(NhsukFrontendVue, {router})
```
Then in vue components:

```jsx
<template>
  <nhs-row>
    <nhs-col>
      <nhs-button>test button</nhs-button>
      ...
    </nhs-col>
  </nhs-row>
</template>
```

OR

Import each component individually

```jsx
<template>
  <nhs-main>
    ...
  </nhs-main>
</template>

<script>
  import { defineComponent } from 'vue'
  import { NhsMain } from 'nhsuk-frontend-vue'

  export default defineComponent({
    components: {
      NhsMain
    }
  })
</script>
```


## To build locally

```
git clone https://github.com/xLasercut/nhsuk-frontend-vue.git
cd nhsuk-frontend-vue
yarn build
```

The output files will be located in the `dist` folder

## Running tests

This project uses [backstop](https://garris.github.io/BackstopJS/) for screenshot tests

Backstop tests:
```
yarn backstop:test
```

## License

NHS.UK frontend library MIT © [NHS.UK frontend](https://www.npmjs.com/package/nhsuk-frontend).
