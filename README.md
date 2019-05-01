# nhsuk-frontend-vue

This is an **unofficial** port of [nhsuk-frontend library](https://github.com/nhsuk/nhsuk-frontend/) in to a vue.js component library.

For previews and docs: [Preview Page](https://xlasercut.github.io/nhsuk-frontend-vue/)


## Install
```
npm install nhsuk-frontend-vue
```

## Use

```jsx
import NhsukFrontendVue from 'nhsuk-frontend-vue'

Vue.use(NhsukFrontendVue)
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
  import { NhsMain } from 'nhsuk-frontend-vue'

  export default {
    components: {
      NhsMain
    }
  }
</script>
```


## To build locally

```
git clone https://github.com/xLasercut/nhsuk-frontend-vue.git
cd nhsuk-frontend-vue
npm run build
```

The output files will be located in the `dist` folder

## Running tests

This project uses [jest](https://jestjs.io/) for unit tests and [cypress](https://www.cypress.io/) for integration tests.

Unit tests:
```
npm run test:unit
```

Integration tests:
```
npm run test:e2e
```

## License

MIT © [Tim Wang](https://github.com/xLasercut)

NHS.UK frontend library MIT © [NHS.UK frontend](https://www.npmjs.com/package/nhsuk-frontend).