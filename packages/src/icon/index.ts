import NhsIcon from './NhsIcon.vue'
import {App, Plugin} from 'vue'

const NhsIconPlugin: Plugin = {
  install: (app: App) => {
    app.component('nhs-icon', NhsIcon)
  }
}

export {
  NhsIcon,
  NhsIconPlugin
}
