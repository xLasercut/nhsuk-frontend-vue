// Import vue components
import '../../node_modules/nhsuk-frontend/dist/nhsuk.css'
import '../../node_modules/nhsuk-frontend/packages/polyfills'

import * as components from './components'

// Create module definition for Vue.use()
const plugin = {
  install: (app, options = {}) => {
    for (let component of Object.values(components)) {
      app.component(component.name, component)
    }

    app.provide('router', options.router)
  }
}

// Default export is library as a whole, registered via Vue.use()
export default plugin

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from './components'
