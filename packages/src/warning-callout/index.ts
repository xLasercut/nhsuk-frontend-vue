import NhsWarningCallout from './NhsWarningCallout.vue'
import {App, Plugin} from 'vue'

const NhsWarningCalloutPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsWarningCallout.name, NhsWarningCallout)
  }
}

export {
  NhsWarningCallout,
  NhsWarningCalloutPlugin
}
