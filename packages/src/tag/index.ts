import NhsTag from './NhsTag.vue'
import {App, Plugin} from 'vue'

const NhsTagPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsTag.name, NhsTag)
  }
}

export {
  NhsTag,
  NhsTagPlugin
}
