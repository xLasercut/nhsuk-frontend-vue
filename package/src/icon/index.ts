import NhsIcon from './NhsIcon.vue'
import {App, Plugin} from 'vue'

const NhsIconPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsIcon.name, NhsIcon)
  }
}

export {
  NhsIcon,
  NhsIconPlugin
}
