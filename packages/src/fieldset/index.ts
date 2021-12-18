import NhsFieldset from './NhsFieldset.vue'
import {App, Plugin} from 'vue'

const NhsFieldsetPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsFieldset.name, NhsFieldset)
  }
}

export {
  NhsFieldset,
  NhsFieldsetPlugin
}
