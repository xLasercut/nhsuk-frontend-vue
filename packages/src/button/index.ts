import NhsButton from './NhsButton.vue'
import {App, Plugin} from 'vue'

const NhsButtonPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsButton.name, NhsButton)
  }
}

export {
  NhsButton,
  NhsButtonPlugin
}
